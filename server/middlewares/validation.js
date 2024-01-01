const {check,body} = require('express-validator');
const User = require('../models/user')

exports.email = 
     check('email')
    .notEmpty().withMessage('The email field cannot be empty')
    .isEmail().withMessage('Enter a valid email address')
    .normalizeEmail();
exports.password = 
     body('password')
    .notEmpty().withMessage('The password field requires a value')
    .isLength({min:8}).withMessage('password must be at least 8 characters')
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage('Password must contain atleast one lowercase, one uppercase, one digit and one special character')
    .trim();
exports.user = 
    check('email')
    .notEmpty().withMessage('The email field cannot be empty')
    .isEmail().withMessage('Enter a valid email address')
    .custom((value,{req})=>{
        return User.findOne({email:value})
        .then(user=>{
            if(user){
                return Promise.reject("User exists with this email")
            }
        })
    })
    .normalizeEmail();
exports.resetToken =
body('resetToken')
.notEmpty().withMessage('Invalid reset token');
exports.catName = 
body('category_name')
.notEmpty().withMessage('Category name field is required');
exports.catType = 
body('category_type')
.notEmpty().withMessage('Category type field is required');

