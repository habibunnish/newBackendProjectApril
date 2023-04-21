const express=require("express")
const router=express.Router();
const createError=require("http-errors")
const User=require("../Models/User.model");
const Admin=require("../Models/Admin.model");
const {authSchema}=require("../helpers/validation_schema");
const {adminLoginSchema}=require("../helpers/adminValidation_schema")
const {signAccessToken,signRefreshToken,verifyRefreshToken}=require("../helpers/jwt_hepler");
const { adminSignAccessToken, AdminSignRefreshToken } = require("../helpers/adminJwt_helper");


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
        console.log("hee",req.body)
         const user=await User.findOne({email:result.email});
        if(!user) throw createError.NotFound("user not register");
        const isMatch=await user.isValidPassword(result.password)
        if(!isMatch) throw createError.Unauthorized("useremail/password not valid")
        const accessToken=await signAccessToken(user.id,user.role);
        const refreshToken= await signRefreshToken(user.id);
        res.send({accessToken,refreshToken});
        console.log({accessToken,refreshToken})

     }
    catch(error){
        if(error.isjoi ===true) return next(createError.BadRequest("invalid email or password"));
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

// router.delete("/logout",async(req,res,next)=>{
//    try{
//     const {refreshToken}=req.body
//     if(!refreshToken) throw createError.BadRequest()
//     const userId=await verifyRefreshToken(refreshToken)
   
    
//    }
//    catch(error){
//         next(error)
//    }
// })


router.post("/adminregister",async(req,res,next)=>{
    console.log(req.body)

    try{
        const result=await adminLoginSchema.validateAsync(req.body);
        const doesexist=await Admin.findOne({email:result.email});
        if(doesexist)
            throw createError.Conflict(`${result.email} this email address of admin already exist `)
            const admin=new Admin(result);
            const adminsavedUser=await admin.save();
           
        
            res.send(adminsavedUser)
        }
        catch(error){
            if(error.isjoi===true) error.status=422
            next(error)
    }
});
router.post("/adminlogin",async(req,res,next)=>{
    try{
        const result=await adminLoginSchema.validateAsync(req.body);
        const admin=await Admin.findOne({email:result.email})
        if(!admin) throw createError.NotFound("admin not registered");
        const isMatch=await admin.isValidPassword(result.password)
        if(!isMatch) throw createError.Unauthorized("adminEmail/password not valid try again");
        const accessToken=await adminSignAccessToken(admin.id);
        const refreshToken= await AdminSignRefreshToken(admin.id);
        res.send({accessToken,refreshToken});

        console.log({accessToken,refreshToken});
    }
    catch(error){
        if(error.isjoi===true) return next(createError.BadRequest("invalid email or password"))
        next(error)
    }
})
module.exports=router