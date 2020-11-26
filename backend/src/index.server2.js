const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const product = require('./routes/product')

const app = express()
//environment variable
env.config()
// middleware
app.use(express.json())
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)
app.use('/api',product)

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

