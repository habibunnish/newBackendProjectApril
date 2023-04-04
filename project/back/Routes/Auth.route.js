const express=require("express")
const router=express.Router();
const createError=require("http-errors")
const User=require("../Models/User.model");
const {authSchema}=require("../helpers/validation_schema");
const {signAccessToken,signRefreshToken,verifyRefreshToken}=require("../helpers/jwt_hepler");


router.post("/register",async(req,res,next)=>{
    console.log(req.body);
    try{
       
        const result=await authSchema.validateAsync(req.body);
        const doesexist=await User.findOne({email:result.email});
        if(doesexist)
        throw createError.Conflict(`${result.email} already this email exist`)
        const user=new User(result)
        const savedUser=await user.save()
         const accessToken=await signAccessToken(savedUser.id);
         const refreshToken=await signRefreshToken(savedUser.id);
         res.send({accessToken,refreshToken});
        res.send(savedUser);


         }
    catch(error){
        if(error.isjoi === true )error.status=422
        next(error)
    }
})

router.post("/login",async(req,res,next)=>{
    try{
        
        const result=await authSchema.validateAsync(req.body)
         const user=await User.findOne({email:result.email});
        if(!user) throw createError.NotFound("user not register");
        const isMatch=await user.isValidPassword(result.password)
        if(!isMatch) throw createError.Unauthorized("username/password not valid")
        const accessToken=await signAccessToken(user.id);
        const refreshToken= await signRefreshToken(user.id);
        res.send({accessToken,refreshToken});
        console.log({accessToken,refreshToken})


     }
    catch(error){
        if(error.isjoi ===true) return next(createError.BadRequest("invalid username or password"));
        next(error)
    }
});

router.post("/refresh-token",async(req,res,next)=>{
    // res.send("refreshroute");
    try{
        const { refreshToken }=req.body
        if(!refreshToken) throw createError.BadRequest()
        const userId= await verifyRefreshToken(refreshToken)

        const accessToken=await signAccessToken(userId)
        const refToken=await signRefreshToken(userId)
        res.send({accessToken:accessToken,refreshToken:refToken})

    }
    catch(error){
        next(error);
    }
});

router.delete("/logout",async(req,res,next)=>{
    res.send("register route");
})

module.exports=router