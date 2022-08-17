const express=require("express")
const router=require("express").Router();
const {mpesaPassword,token,stkPush,}=require("../models/mpesaController");
router.get("/password",mpesaPassword)
router.get("/stk/push",token,stkPush)

module.exports=router