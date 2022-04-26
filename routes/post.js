const router=require("express").Router();
 const Posts=require("../models/post");
const { verifyTokeAndAdmin,verifyTokenAndAuthorization } = require("./varification");

 router.post("/new", async(req,res)=>{
const newPost=new Posts({
postImage:req.body.postImage,
postTitle:req.body.postTitle,
postSubtitle:req.body.postSubtitle,
postDescription:req.body.postDescription

})
console.log(newPost)
try{
    const savedPost=await newPost.save()
    console.log(newPost)
    res.status(201).json(savedPost)
}
catch(err){
res.status(404).json(err)
}




 })


//  update Post
router.put("/:id", verifyTokeAndAdmin, async (req,res)=>{
    try{
        const id=req.params.id

        const updates=req.body
        const options={new:true}
        const updatedPost= await Posts.findByIdAndUpdate(id,updates,options)
        res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
    })



    // delete post
router.delete("/:id",verifyTokeAndAdmin,async(req,res)=>{
    try{
        res.status(200).json("post deleted")
    return await Posts.findByIdAndDelete(req.params.id)
    
    }
    catch(err){
    res.status(404).json("post not Found")
    }})
    

// find post by id


router.get("/find/:id", async(req,res)=>{


    try{ 
        

        const post=await Posts.findById(req.params.id)
        const {password,...others}=post._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(404).json(err)

    }
})


// FIND ALL
router.get("/", async(req,res)=>{


    try{ 
        const post=await Posts.find()
        res.status(200).json(post)
    }
    catch(err){
        res.status(404).json(err)

    }
})







 module.exports=router;