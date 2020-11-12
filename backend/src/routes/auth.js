const express = require('express')
const router = express.Router()
const { signup , signin, requireSignin } = require('../controller/auth')

router.post('/signin', signin)

router.post('/signup', signup)

router.post('/profile', requireSignin, (req,res)=>{
    if(req.user){
        res.status(200).json({user:'Profile'})
    }else{
        res.status(400).json({user:'Failed'})
        console.log('Authentication failed')
    }    
})

module.exports = router