const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/signin',(req,res)=>{

})

router.post('/signup',(req,res)=>{    
    User.findOne({email:req.body.email})
        .exec((error,data)=>{     
            if(data){
                console.log(req.body.email)   
                return res.status(400).json({            
                    message:'User Already Registered'
                })
            }

            const { firstName,
                lastName,
                email,
                password,
                } = req.body
    
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                userName : Math.random().toString()
            
            })

            _user.save((error,data)=>{
                if(error){
                    return res.status(400).json({
                        message:error
                    })
                }
        
                if(data){
                    return res.status(201).json({
                        user: 'User Created Successfully'
                    })
                }
            })


        })
})

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