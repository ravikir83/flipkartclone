const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true,trim:true},
    lastName: {type:String,required:true },
    userName: {type:String,required:true , trim:true, unique:true,index:true,lowercase:true},
    email: {type:String,required:true , trim:true, unique:true,lowerCase:true,lowercase:true},
    hash_password: {type:String,required:true,trim:true},
    role: {type:String,enum:['user','admin'],default:'user'},
    contact:{type:String},
    profile:{type:String},

},{timestamps:true})

userSchema.virtual('password')
          .set(function(password){
                this.hash_password = bcrypt.hashSync(password,10)                
})

// userSchema.methods = {
//     authenticate : function(password){
//         return bcrypt.compare(password,this.hash_password)
//     }
// }

module.exports = mongoose.model('User',userSchema) 