const router=require("express").Router();
 const Product=require("../models/product");
 const { verifyTokeAndAdmin,verifyTokenAndAuthorization } = require("./varification");


 router.post("/new", async(req,res)=>{
    const newProduct=new Product({
        productImage:req.body.productImage,
    productName:req.body.productName,
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

    // FIND ALL PRODUCT
router.get("/", async(req,res)=>{

    try{ 
        const product=await Product.find()
        res.status(200).json(product)
    }
    catch(err){
        res.status(404).json(err)

    }
})

        // delete post
router.delete("/:id",verifyTokeAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("product deleted")
    return await Product.findByIdAndDelete(req.params.id)
    
    }
    catch(err){
    res.status(404).json("product not Found")
    }})
    

    module.exports=router;