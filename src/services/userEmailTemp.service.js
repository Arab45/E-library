import sendMail from "../utils/sendMail.js";
import { sendSuccess } from "../middleware/index.middleware.js"
import  registrationEmailATemp from "../../public/main/userEmailReg.js";
import loginSessiontemp from "../../public/main/loginSessionTemp.js";
import resetPassTemp from "../../public/main/forgetPassTemp.js";
import User from "../models/User.model.js"
import resetPasswordSuccessTemp from "../../public/main/successEmailTemp.js"


export const sendUserEmail = async (req, res) => {
    const { newUser } = req.body;
    const email = newUser.email;
    const username = newUser.username;
    const subject = 'User account created';
    const body = registrationEmailATemp(username);
    

    try {
        sendMail(email, subject, body);
    } catch (error) {
        console.log(error.message);
        return sendSuccess(res, 'You have register but we can not send you a email at the moment');   
    }
    return sendSuccess(res, 'Email has been successfully send to you.', newUser);
};

export const userSessionEmail = async (req, res) => {
    const userId = req.id;
    const user = await User.findById(userId);
    console.log(`from nodemailer ${user}`);
    const email = user.email;
    const username = user.username;
    const subject = 'Verify that it is you!';
    const body = loginSessiontemp(username);

    try {
        sendMail(email, subject, body);
    } catch (error) {
        console.log(error.message);
        return sendSuccess(res, 'Unable to send the OTP email. Please try again.');   
    }
    return sendSuccess( res, 'Email has been successfully send to you.', user );
};

export const userResetPasswordEmail = async (req, res) => {
    const { resetToken, user } = req.body;
     
     const email = user.email;
     const username = user.username;
     const subject = 'Verify that it is you!';
     const body = resetPassTemp( username, resetToken );
 
     try {
         sendMail(email, subject, body);
     } catch (error) {
         console.log(error.message);
         return sendSuccess(res, 'Unable to send the OTP email. Please try again.');   
     }
     return sendSuccess( res, 'Email has been successfully send to you.', user );
 };
 
 
 export const userEmailPasswordSuccess = async (req, res) => {
     const { upadatePassword } = req.body;
     const email = upadatePassword.email;
      const username = upadatePassword.username;
      const subject = 'Successfully reset password!';
      const body = resetPasswordSuccessTemp( username );
  
      try {
          sendMail(email, subject, body);
      } catch (error) {
          console.log(error.message);
          return sendSuccess(res, 'Unable to reset password. Please try again.');   
      }
      return sendSuccess( res, 'Email has been successfully send to you.', upadatePassword );
  };


 