const express = require('express')
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/auth')


const app = express()
//environment variable
env.config()
// middleware
app.use(bodyParser.json())
app.use('/api',userRoutes)

mongoose.connect('mongodb://localhost/flipkart', 
                    {useNewUrlParser: true ,
                     useUnifiedTopology: true,
                     useCreateIndex:true}
                ).then(()=>{
                    console.log('Database connected')
                })

// // app listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server is Running on Port ${process.env.PORT}`)    
})

