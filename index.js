const mongoose = require("mongoose");
// const cloudinary = require("cloudinary")
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/auth");
const postRoutes = require("./routes/post")
const bookingRoutes = require("./routes/nodemailer")
const orderRoutes= require("./routes/nodemailer")
const productRoutes = require("./routes/product")
const mpesaRoutes=require("./routes/mpesa")
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DBconnected")
    })
    .catch((err) => {
        console.log(err)
    })
app.listen(PORT, () => {
    console.log(`sever is running on ${PORT}`)
});

const corsOptions = {
    "Access-Control-Allow-Origin": "*"
}

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Welcome to the API")
})

app.use(express.json());
app.use("/api",mpesaRoutes)
app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api",orderRoutes)
app.use("/api", bookingRoutes);
app.use("/api/post", postRoutes);
