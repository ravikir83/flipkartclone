const express = require('express')
const { requireSignin, adminMiddleware } = require('../common-middleware')
const { createProduct } = require('../controller/product')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const router = express.Router()

router.post('/product/create',
             requireSignin,
             adminMiddleware,
             upload.single('productPicture'),
             createProduct)

module.exports = router
