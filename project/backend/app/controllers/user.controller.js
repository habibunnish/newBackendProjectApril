const db=require("../models");
const User=db.user;
const asyncHandler = require("express-async-handler");

exports.register=asyncHandler(async(req,res)=>{
    console.log("reg");
    const user=new User({
        firstname:req.body.firstname, 
        lastname: req.body.lastname,
        street:req.body.street ,
        city: req.body.city,
        state:req.body.state ,
        zipcode:req.body.zipcode ,
        email: req.body.email,
        password:req.body.password,
        user_id: req.user.id,
    });
    user.save(user)
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
      //Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password: ", hashedPassword);
      const loginuser = await User.create({
       firstname,lastname,street,city,state,zipcode, email,
        password: hashedPassword,
      });
      console.log(`User created ${loginuser}`);
      if (loginuser) {
        res.status(201).json({ _id: loginuser.id, email: loginuser.email, password:loginuser.password });
      } else {
        res.status(400);
        throw new Error("User data us not valid");
      }
      res.json({ message: "Register the user" });
});
exports.userRegisterDetails=(req,res)=>{
    User.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).sent({
            message: err.message || "some error occured while retriving userDetails"
        });
    });
    
};
