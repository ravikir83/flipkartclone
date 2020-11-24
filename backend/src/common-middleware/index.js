const jwt = require('jsonwebtoken')

exports.requireSignin = (req,res,next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        try{
            const user = jwt.verify(token,process.env.JWT_SECRET)
            req.user = user
        }catch(err){
            console.log('error')        
        }    
        
        next()
    }else{
        return res.status(400).json({
            message:'Authorization required'
        })
    }
}

exports.userMiddleware = (req,res,next)=>{

}

exports.adminMiddleware = (req,res,next)=>{
    if(req.user.role !== 'admin'){
        console.log(req.user.role)
        console.log(req.user.role)
        return res.status(400).json({
            message:'Access denied'
        })
    }else{
        console.log(req.user.role)
    }
    next()
}