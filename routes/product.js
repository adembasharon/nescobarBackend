const router=require("express").Router();
 const Product=require("../models/product");

 router.post("/new", async(req,res)=>{
    const newProduct=new Product({
    productImage:req.body.productImage,
    productTitle:req.body.productTitle,
    productColor:req.body.productColor,
    productSize:req.body.productSize,
    productQuantity:req.body.productQuantity,
    productPrice:req.body.productPrice,
    
    })
    console.log(newProduct)
    try{
        const savedProduct=await newProduct.save()
        console.log(newProduct)
        res.status(201).json(savedProduct)
    }
    catch(err){
    res.status(404).json(err)
    }})

    module.exports=router;