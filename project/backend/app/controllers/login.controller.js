const db=require("../models");
const LoginData=db.login;
const userDetails=db.user;
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const asyncHandler = require("express-async-handler");



exports.login=asyncHandler(async (req, res) => {
   
    const logindata=new LoginData({
        email:"Admin123@gmail.com",
        password:"admin@123"
    });
    logindata
        .save(logindata)
        .then((data)=>{
            console.log(data);
            res.send(data);
                console.log("data added to databse");
        })
        .catch((err)=>{
            res.status(500).send({
                message:err.message || "some error occured while creating the userDetails",
        });
        
    });
    const details=await userDetails.findOne({email});
    if(details && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign(
            {
                user: {
                    password: user.password,
                    email: user.email,
                    id: user.id,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"24hr"}
        )
        res.status(200).json({accessToken});
    }
    else {
        res.status(401);
        throw new Error("email or password is not valid");
      }
   
})

exports.getgetUserLogin=(req,res)=>{
    LoginData.find()
    .then((data)=>{
        console.log(data);
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        })
    });
};
exports.adminLoginDetailsGet=(req,res)=>{
    LoginData.find()
    .then((data)=>{
        console.log(data);
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        })
    });
};