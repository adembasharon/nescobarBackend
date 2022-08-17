const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
postImage:{type:String,required:true },
postTitle:{type:String,required:true },
postSubtitle:{type:String,required:true },
postDescription:{type:String,required:true },

},
{timestamps:true})


module.exports=mongoose.model("Post",postSchema) 