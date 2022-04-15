const mongoose=require("mongoose");
const dotenv=require("dotenv");
const express=require("express");
const cors = require("cors");
const userRoutes=require("./routes/auth");
const postRoutes=require("./routes/post")
const bookingRoutes =require("./routes/nodemailer")

const app=express()
dotenv.config()

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DBconnected")
})
.catch((err)=>{
    console.log(err)
})
app.listen(PORT,()=>{
    console.log(`sever is running on ${PORT}`)
});

app.use(cors({'Access-Control-Allow-Origin':'*', "Access-Control-Request-Method": 'POST',origin:"*"}))

app.get("/", (req, res)=>{
    res.send("Welcome to the API")
})

app.use(express.json());
 app.use("/api/auth",userRoutes);

app.use("/api",bookingRoutes);
 app.use("/api/post",postRoutes);
 