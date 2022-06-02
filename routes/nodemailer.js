const router=require("express").Router();
const nodemailer = require("nodemailer");


router.post("/booking",async (req , res)=>{
 const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     auth: {
      type: "OAuth2",
      clientId: "612894505463-tl05pd51li29007a9cg0hahmq1pig70m.apps.googleusercontent.com",
      clientSecret: "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",
    },
    
   });
 async function run() {

   let infoContent = await transporter.sendMail({
     from: `${req.body.name} <${req.body.email}>`, 
     to: "lorinesotile@gmail.com", 
     subject:`${req.body.category}`, 
     text:`${req.body.message}`, 
     html:`<div><p>${req.body.name}<br/>${req.body.phonenumber}<br/>${req.body.message}</p></div>`,
  })

res.status(200).json(infoContent)
 }
run()
})

module.exports=router;