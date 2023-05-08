const db=require("../models");
const Admin=db.admin;
const asyncHandler = require("express-async-handler");

exports.adminRegister=asyncHandler(async(req,res)=>{
    const admin=new Admin({
        email: req.body.email,
        password:req.body.password,
    });
    const { error, value } = Admin.validate(req.body);
    if (error) {
      return res.status(400).send({
        message: error.details[0].message
      });
    }
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
    const admins=new Admin({
        email: req.body.email,
        password:req.body.password,
    });
    admins.save(admins).then((data)=>{
        console.log(data);
        res.send(data);
        console.log("data added to databse");
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message||"some eror occured while creating adminDetails",
        })
    })
}
