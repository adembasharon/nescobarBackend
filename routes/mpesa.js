// const express=require("express")
// const router=require("express").Router();
// const {mpesaPassword,token,stkPush,}=require("../models/mpesaController");
// router.get("/password",mpesaPassword)
// router.post("/stk/push",token,stkPush)

// module.exports=router

// 
const express=require("express")
const router=express.Router()
const {
mpesaPassword,
token,
stkPush,

}=require("../models/mpesaController")
router.get("/password",mpesaPassword)
    

router.post("/stk/push",token,stkPush);

    module.exports=router