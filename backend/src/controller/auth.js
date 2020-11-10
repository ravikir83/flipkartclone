const User = require('../models/user')

exports.signup = (req,res)=>{
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