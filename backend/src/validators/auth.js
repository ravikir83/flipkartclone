const { check , validationResult } = require('express-validator')

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required') ,
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .notEmpty()
    .withMessage('email is required'),
    check('password')
    .notEmpty()
    .withMessage('Password is required')
]

exports.validateSigninRequest = [    
    check('email')
    .notEmpty()
    .withMessage('email is required'),
    check('password')
    .notEmpty()
    .withMessage('Password is required')
]

exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req)
    console.log(req.body.email)
    if(errors.array().length>0){
        return res.status(400).json({error:errors.array()[0].msg})
    }
    next()
}