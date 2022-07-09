const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    productName:{type:String,required:true },
    productColor:{type:String,required:true},
    productSize:{type:String,required:true },
    productPrice:{type:Number,required:true },
    productQuantity:{type:Number,required:true},
    productImage:{type:String,required:true },
},{
    timeStamps:true
})
module.exports=mongoose.model("Product",productSchema) 

