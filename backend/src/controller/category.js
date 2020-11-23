const slugify = require('slugify')
const Category = require('../models/category')
const router = require('../routes/category')


exports.addCategory = (req,res)=>{

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
}

exports.getCategories = (req,res)=>{
    Category.find({})
    .exec((error,categories)=>{
        if(error) return res.status(400).json({error})

        if(categories){
            res.status(200).json({categories})
        }
    })
}