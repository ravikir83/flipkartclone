const express = require('express')
const router = express.Router()
const { signup } = require('../controller/auth')

router.post('/signin',(req,res)=>{

})

router.post('/signup', signup)

// get
router.get('/',(req,res,next)=>{
    return res.status(200).json({
        message: 'Hello , you are talking to the server'
    })
})
// post
router.post('/data',(req,res,next)=>{
    return res.status(200).json({
        message: req.body        
    })
})

module.exports = router