const db=require("../models");
const Booked=db.booked;


exports.userBookedData=(req,res)=>{
    const booked=new Booked({
        tittle:req.body.tittle,
        area:req.body.area,
        image:req.body.image,
        location:req.body.location,
        quantity:req.body.quantity,
        total:req.body.total
    });
    const { error, value } = Booked.validate(req.body);
    if (error) {
      return res.status(400).send({
        message: error.details[0].message
      });
    }
    console.log(booked)
    booked.save(booked).then((data)=>{
        res.send(data);
        console.log("data added in databse sccessfully");
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message||"some error occured while saving in databse"
        });
    });
};
exports.getBookedData=(req,res)=>{
    Booked.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving product"
        });
    });
}