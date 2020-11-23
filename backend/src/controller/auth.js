const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

exports.signup = (req,res)=>{

    // const errors = validationResult(req)
    // return res.status(400).json({errors:errors.array()})

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
}

exports.signin = (req,res)=>{
    User.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(error){
                return res.status(400).json({ error })
            }

            if(user){
                if(user.authenticate(req.body.password)){
                    const token = jwt.sign( {_id:user._id},
                                            process.env.JWT_SECRET,
                                            { expiresIn: '1h'} )                    
                    
                    const {firstName,lastName,email,role,fullName} = user
                    return res.status(200).json({
                        token,
                        user:{
                            firstName,lastName,email,role,fullName
                        }
                    })
                }else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }
            }else{
                return res.status(400).json({message:'Something went wrong'})
            }
        })
}

