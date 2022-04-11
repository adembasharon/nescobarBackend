const mongoose=require("mongoose");
const dotenv=require("dotenv");
const express=require("express");
const userRoutes=require("./routes/auth");
const postRoutes=require("./routes/post")

const app=express()

const PORT=process.env.PORT || 5000;
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DBconnected")
})
.catch((err)=>{
    console.log(err)
})
app.listen(PORT,()=>{
    console.log(`sever is running on ${PORT}`)
});
app.use(express.json());
 app.use("/api/auth",userRoutes);


 app.use("/api/post",postRoutes);
 