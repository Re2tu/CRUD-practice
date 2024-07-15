const express = require('express');
const Product=require("../models/product.model.js");
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct}=require('../controllers/product.controller.js');
const { deleteProduct } = require('../controllers/product.controller.js');

//controller function

router.get('/',getProducts);

router.get('/:id',getProducts);

router.post('/',createProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct)

module.exports=router;