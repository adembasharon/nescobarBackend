const jwt=require("jsonwebtoken")

const varification=(req,res,next)=>{
    console.log(req.headers)
const authHeader=req.headers.token
if(authHeader){
const token = authHeader.split(" ")[1]
jwt.verify(token , process.env.JWT_SEC , (err,user)=>{

    err ? res.status(403).json("Token is Not Valid") : req.user=user
    next()
})

}else{
    res.status(401).json("User not Authenticated")
}


}
const verifyTokenAndAuthorization=(req,res,next)=>{
varification(req,res,()=>{
if(req.user.id===req.params.id || req.user.isAdmin ){
    next()
 } else{
     res.status(500).json("You Cannot Suport This Task")
 }
})
}

const verifyTokeAndAdmin=(req,res,next)=>{

    varification(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(500).json("You Cannot Suport This Task")

        }
    })
}






module.exports={verifyTokeAndAdmin , verifyTokenAndAuthorization}
