const express = require('express')
const Category = require('../models/category')
const slugify = require('slugify')
const category = require('../models/category')
const router = express.Router()

router.post('/category/create',(req,res)=>{
    console.log('categories')
    const categoryObj = {
        name:req.body.name,
        slug:slugify(req.body.name)        

    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId
    }

    const cat = new Category(categoryObj)

    cat.save((error,obj)=>{
        if(error) return res.status(400).json({error})
        
        if(obj){
            return res.status(201).json({obj})
        }
    })

})

module.exports = router


