import { sendError, sendSuccess } from "../middleware/index.middleware.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const loginProcess = async (req, res, next) => {
  const { logInID, password } = req.body;
  const normalizedLogInID = logInID.toLowerCase();

  try {
    // Check if the login ID exists as either email or username
    const checkuserExist = await User.findOne({
      $or: [{ email: normalizedLogInID }, { username: normalizedLogInID }],
    });

    if (!checkuserExist) {
      return sendError(
        res,
        "User does not exist with this email or username, signup instead",
      );
    }

    // Pass the data to the next middleware
    req.body = { logInID, checkuserExist, password };
    next();
  } catch (error) {
    return sendError(res, "Something went wrong", 500);
  }
};

export const loginAttempt = async (req, res, next) => {
  const { logInID, checkuserExist, password } = req.body;
  console.log(`from login attempt ${logInID} and ${password}`);

  try {
    const hashpassword = checkuserExist.password;
    const isPasswordCorrect = bcrypt.compareSync(password, hashpassword);
    if (!isPasswordCorrect) {
      return sendError(res, "Invalid password provided");
    }
    //Encoding the user payload
    const loginToken = jwt.sign(
      { userId: checkuserExist._id },
      process.env.JWT_USER_SECRET,
      { expiresIn: "1d" },
    );

    //Creating both server/browser cookies
    res.cookie(String(checkuserExist._id), loginToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    const user = {
      id: checkuserExist._id,
      fullName: checkuserExist.fullName,
      email: checkuserExist.email,
      role:  checkuserExist.role,
    };

    return sendSuccess(res, "successfully login", {
      user,
      accessToken: loginToken,
    });
  } catch (error) {
    return sendError(res, "Something went wrong", 500);
  }
};

//Authorized user credentials
export const verifyLoginUserToken = (req, res, next) => {
  const cookie = req.headers.cookie;

  if (!cookie) {
    return sendError(
      res,
      "No cookie found, You are not authorize to access this resource.",
    );
  }

  const token = cookie.split("=")[1];
  if (!token) {
    return sendError(res, "No session cookie found, login first");
  }

  //Decoding User token
  jwt.verify(String(token), process.env.JWT_USER_SECRET, (error, success) => {
    if (error) {
      return sendError(
        res,
        "Your session cannot be verified, you are not authorize to access this resource",
      );
    }

    //custom rquest id
    req.id = success.userId;
    next();
  });
};

//Logout funtion for user
export const logOut = (req, res) => {
  const cookie = req.headers.cookie;
  if (!cookie) {
    return sendError(
      res,
      "No cookie found, You are not authorize to access this resource.",
    );
  }

  //Extracting my token from perticular user
  const token = cookie.split("=")[1];
  if (!token) {
    return sendError(res, "No session cookie found, login first");
  }

  //Decoding my cookies
  jwt.verify(String(token), process.env.JWT_USER_SECRET, (error, success) => {
    if (error) {
      return sendError(
        res,
        "Your session cannot be verified, you are not authorize to access this resource",
      );
    }

    //clearing the cookie from my database
    res.clearCookie([`${success.userId}`]);
    return sendSuccess(res, "Successfully logged out.");
    //setting the ID value to empty cokies. It also an array of available cookies
    //  res.cookies[`${success.adminId}`] = '';
    //  return sendError(res, 'Successfully logged out.')
  });
};

export const forgetPasswordToken = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return sendError(res, "no user payload detected");
  }

  const resetToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_USER_SECRET,
    { expiresIn: "1d" },
  );
  console.log(resetToken);
  const hashToken = bcrypt.hashSync(resetToken, 10);
  try {
    // Store the hash and expiration in the database
    user.resetPaswordToken = hashToken;
    user.resetPasswordExpiredAt = Date.now() + 1000 * 60 * 60 * 24;
    await user.save();
    console.log(
      `Send this reset link: http://localhost:3000/reset-password/${resetToken}`,
    );
    //  return sendSuccess(res, 'successfully create', user);
    req.body = { resetToken, user };
    next();
  } catch (error) {
    console.log(error);
    return sendError(res, "Something went wrong.");
  }
};

export const resetPassword = async (req, res, next) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  const user = await User.findOne({
    resetPasswordExpiredAt: { $gt: Date.now() },
  });
  console.log("reset password", user);
  if (!user) {
    return sendError(res, "user does not exist");
  }

  const hashToken = user.resetPaswordToken;
  const isValidToken = bcrypt.compareSync(token, hashToken);
  console.log(isValidToken);
  if (!isValidToken) {
    return sendError(res, "invalid or expired token");
  }

  // Hash the new
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(newPassword, salt);

  // Update the user's password and clear the reset token
  user.password = hashedPassword;
  user.resetPaswordToken = undefined;
  user.resetPasswordExpiredAt = undefined;

  try {
    const upadatePassword = await user.save();
    // return sendSuccess(res, "Password reset successful", upadatePassword);
    req.body = { upadatePassword };
    next();
  } catch (error) {
    console.log(error);
    return sendError(res, "Something went wrong.");
  }
};
