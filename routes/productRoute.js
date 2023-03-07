const express = require('express')

const {addProduct, productDetails, deleteProduct, getAllProducts, productByCategory, updateProduct, getFilteredProducts, getFilteredProduct}= require('../controller/productController')
const { requireSignin } = require('../controller/userController')
const upload = require('../controller/Utils/fileUploads')
const { productCheck, validate } = require('../controller/validation')

const router = express.Router()


router.post('/addproduct',upload.single('product_image'),requireSignin,productCheck,validate,addProduct)
router.get('/productdetails/:id',productDetails)
router.delete('/deleteproduct/:id',deleteProduct)
router.get('/getallproducts',getAllProducts)
router.get('/productbycategory/:category_id',productByCategory)
router.put('/updateproduct/:id',upload.single('product_image'),updateProduct)
router.post('/getfilteredproducts',getFilteredProduct)

module.exports = router