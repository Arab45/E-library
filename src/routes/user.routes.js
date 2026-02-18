// import express from "express"
// import {  signUp, fetchSingleUser, fetchAllUser } from "../controller/user.controller.js";
// import { 
//     loginProcess, 
//     loginAttempt, 
//     verifyLoginUserToken, 
//     logOut,
//     forgetPasswordToken,
//     resetPassword } from "../controller/auth.controller.js";
// import { validation, validateSignUp } from "../middleware/validator.middleware.js";
// import userExistence  from "../middleware/user.middleware.js";
// import { sendUserEmail, userSessionEmail, userResetPasswordEmail, userEmailPasswordSuccess } from "../services/userEmailTemp.service.js";

// const router = express.Router();

// router.post('/signUp', validateSignUp, validation, userExistence, signUp, sendUserEmail);
// router.post('/signIn', loginProcess, loginAttempt); 
// router.get('/verifyLogin', verifyLoginUserToken, userSessionEmail );
// router.get('/logout', logOut);
// router.post('/forgetPassword', forgetPasswordToken, userResetPasswordEmail);
// router.get('/reset-password/:token', resetPassword, userEmailPasswordSuccess);


// export default router  


import express from "express";
import { signUp, fetchSingleUser, fetchAllUser } from "../controller/user.controller.js";
import {
  loginProcess,
  loginAttempt,
  verifyLoginUserToken,
  logOut,
  forgetPasswordToken,
  resetPassword
} from "../controller/auth.controller.js";

import { validation, validateSignUp } from "../middleware/validator.middleware.js";
import userExistence from "../middleware/user.middleware.js";

import {
  sendUserEmail,
  userSessionEmail,
  userResetPasswordEmail,
  userEmailPasswordSuccess
} from "../services/userEmailTemp.service.js";

const router = express.Router();

/**
 * @swagger
 * /api/users/signUp:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth & Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - username
 *               - email
 *               - password
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Doe
 *               username:
 *                 type: string
 *                 example: arab45
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post(
  "/signUp",
  validateSignUp,
  validation,
  userExistence,
  signUp,
  sendUserEmail
);



/**
 * @swagger
 * /api/users/auth/signIn:
 *   post:
 *     summary: Login user
 *     tags: [Auth & Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               logInID:
 *                 type: string
 *                 example: user@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/signIn', loginProcess, loginAttempt);


/**
 * @swagger
 * /api/users/auth/verifyLogin:
 *   get:
 *     summary: Verify logged-in user session and send verification email
 *     tags: [Auth & Users]
 *     responses:
 *       200:
 *         description: Session verified
 */
router.get('/verifyLogin', verifyLoginUserToken, userSessionEmail);


/**
 * @swagger
 * /api/users/auth/logout:
 *   get:
 *     summary: Logout current user
 *     tags: [Auth & Users]
 *     responses:
 *       200:
 *         description: Successfully logged out
 */
router.get('/logout', logOut);


/**
 * @swagger
 * /api/users/auth/forgetPassword:
 *   post:
 *     summary: Request password reset email
 *     tags: [Auth & Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 *     responses:
 *       200:
 *         description: Reset email sent
 */
router.post('/forgetPassword', forgetPasswordToken, userResetPasswordEmail);


/**
 * @swagger
 * /api/users/auth/reset-password/{token}:
 *   get:
 *     summary: Reset user password
 *     tags: [Auth & Users]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Password reset successful
 */
router.get('/reset-password/:token', resetPassword, userEmailPasswordSuccess);

export default router;
