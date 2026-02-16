import { check, validationResult } from "express-validator";
import { sendError } from "./index.middleware.js";

export const validateSignUp = [
    check('fullName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('full name is missing'),
    check('email').trim()
    .not()
    .isEmpty()
    .withMessage('email is missing')
    .isEmail()
    .withMessage('email is not valid')
    .isLowercase(),
    check('username')
    .trim()
    .not()
    .isEmpty()
    .withMessage('username is missing'),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('password is missing')
    .isLength({min: 8})
    .withMessage('password must at least 8 character long')
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)/)
    .withMessage('Password must contain both letters and numbers'),
];

export const validateProvider = [
    check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('full name is missing'),
    check('email').trim()
    .not()
    .isEmpty()
    .withMessage('email is missing')
    .isEmail()
    .withMessage('email is not valid')
    .isLowercase(),
    check('phone')
    .trim()
    .not()
    .isEmpty()
    .withMessage('phone is missing'),
    check('specialization')
    .trim()
    .not()
    .isEmpty()
    .withMessage('specialization is missing')
];

export const validateAppointment = [
    check('user')
    .trim()
    .not()
    .isEmpty()
    .withMessage('user is missing'),
    check('provider')
    .trim()
    .not()
    .isEmpty()
    .withMessage('provider is missing'),
    check('date')
    .trim()
    .not()
    .isEmpty()
    .withMessage('date is missing'),
    check('time')
    .trim()
    .not()
    .isEmpty()
    .withMessage('specialization is missing')
];

export const validateFeedback = [
    check('user')
    .trim()
    .not()
    .isEmpty()
    .withMessage('user is missing'),
    check('provider')
    .trim()
    .not()
    .isEmpty()
    .withMessage('provider is missing'),
    check('appointment')
    .trim()
    .not()
    .isEmpty()
    .withMessage('appointment is missing'),
    check('rating')
    .trim()
    .not()
    .isEmpty()
    .withMessage('rating is missing'),
    check('comment')
    .trim()
    .not()
    .isEmpty()
    .withMessage('comment is missing')
]

export const validation = (req, res, next) => {
    const error = validationResult(req).array();
    if(error.length > 0){
        console.log(error[0]);
        return sendError(res, error[0].msg);
    }
    next()
    };

