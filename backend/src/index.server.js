const express = require('express')
const env = require('dotenv')
const { response } = require('express')
const app = express()
//environment variable
env.config()
// get
app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Hello , you are talking to the server'
    })
})
// post
app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message: req.body
    })
})
// app listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server is Running on Port ${process.env.PORT}`)
})

