const nodemailer = require("nodemailer");



 const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     auth: {
       user: 'adembasharon816', 
       pass: 'adwacznhkoqiyuwr', 
    },
   });



 async function run() {

   let infoContent = await transporter.sendMail({
     from: "adembasharon816" ,  
     to: "adembasharon816@gmail.com", 
     subject:"work", 
     text:"working is good", 
     html:`<p>working is good</p>`,
  })

console.log(infoContent)
 }
run()


