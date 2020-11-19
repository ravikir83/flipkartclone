const express = require('express')
const router = express.Router()
const { signup , signin, requireSignin } = require('../controller/auth')
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth')

router.post('/signup', validateSignupRequest , isRequestValidated,signup)

router.post('/signin', validateSigninRequest, isRequestValidated, signin)

router.post('/profile', requireSignin, (req,res)=>{
    if(req.user){
        res.status(200).json({user:'Profile'})
    }else{
        res.status(400).json({user:'Failed'})
        console.log('Authentication failed')
    }    
})

module.exports = router