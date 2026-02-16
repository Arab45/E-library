import express from "express"
import {  signUp, fetchSingleUser, fetchAllUser } from "../controller/user.controller.js";
import { 
    loginProcess, 
    loginAttempt, 
    verifyLoginUserToken, 
    logOut,
    forgetPasswordToken,
    resetPassword } from "../controller/auth.controller.js";
import { validation, validateSignUp } from "../middleware/validator.middleware.js";
import userExistence  from "../middleware/user.middleware.js";
import { sendUserEmail, userSessionEmail, userResetPasswordEmail, userEmailPasswordSuccess } from "../services/userEmailTemp.service.js";

const router = express.Router();

router.post('/signUp', validateSignUp, validation, userExistence, signUp, sendUserEmail);
router.post('/signIn', loginProcess, loginAttempt); 
router.get('/verifyLogin', verifyLoginUserToken, userSessionEmail );
router.get('/logout', logOut);
router.post('/forgetPassword', forgetPasswordToken, userResetPasswordEmail);
router.get('/reset-password/:token', resetPassword, userEmailPasswordSuccess);


export default router