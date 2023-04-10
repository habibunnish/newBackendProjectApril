const db=require("../models");
const Admin=db.admin;
const asyncHandler = require("express-async-handler");

exports.adminRegister=asyncHandler(async(req,res)=>{
    const admin=new Admin({
        email: req.body.email,
        password:req.body.password,
    });
    admin.save(admin).then((data)=>{
        console.log(data);
        res.send(data);
        console.log("data added to databse");
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message||"some eror occured while creating adminDetails",
        })
    })
});


exports.adminLoginDetailsGet=(req,res)=>{
    Admin.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message:err.message ||"some error occured while retriving admin Details"
        })
    })
}
