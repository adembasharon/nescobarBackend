const router=require("express").Router();
const nodemailer = require("nodemailer");


router.post("/booking",async (req , res)=>{
 const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     auth: {
       user: 'adembasharon816', 
       pass: '30483049', 
    },
   });



 async function run() {

   let infoContent = await transporter.sendMail({
     from: `${req.body.name} <${req.body.email}>`, 
     to: "adembasharon816@gmail.com", 
     subject:`${req.body.cartegory}`, 
     text:`${req.body.message}`, 
     html:`<div><p>${req.body.message}</p></div>`,
  })
  
console.log(infoContent)
 }
run()
})

module.exports=router;