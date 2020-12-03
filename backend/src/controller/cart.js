const Cart = require('../models/cart')

exports.addItemToCart = (req,res)=>{    
    Cart.findOne({user:req.user._id})
        .exec((error,cart)=>{
            if(error){
                return res.status(400).json("cart error")
            } 

            if(cart){
                const productId = req.body.cartItems.productId
                const item = cart.cartItems.find(c => c.productId == req.body.cartItems.productId)

                if(item){
                    console.log("Product Id ",productId)
                    Cart.findOneAndUpdate({user:req.user._id,"cartItems.productId":productId},{
                        "$set":{
                            "cartItems.$":{
                                ...req.body.cartItems,
                                quantity:   req.body.cartItems.quantity       
                            }                 
                        }
                    }).exec((error,item)=>{
                        if(error) return res.status(400).json({ error })
    
                        if(item){
                            console.log("Cart Update")
                            return res.status(201).json(req.body.cartItems)
                        }
                    })
                }else{
                    Cart.findOneAndUpdate({user:req.user._id},{
                    "$push":{
                        "cartItems":req.body.cartItems                        
                    }
                    }).exec((error,cart)=>{
                        if(error) return res.status(400).json({ error })
    
                        if(cart){
                            return res.status(201).json(cart)
                        }
                    })
                }               
            }else{
                const cart = new Cart(
                    {
                        user : req.user._id,
                        cartItems : req.body.cartItems
                    }
                )
            
                cart.save((error,cart)=>{
                    if(error) return res.status(400).json({ error })
                    if(cart){
                        return res.status(201).json(cart)
                    }
                })
            }
        })   
}