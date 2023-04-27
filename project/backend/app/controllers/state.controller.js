const db=require("../models");
const State=db.state;

exports.addProductDetails=(req,res)=>{
    const state=new State({
        tittle: req.body.tittle,
        area: req.body.area,
        price: req.body.price,
        image:req.body.image ,
        location: req.body.location,
        locations:req.body.locations,
    });
    state.save(state).then((data)=>{
        res.send(data);
        console.log("data added in databse sccessfully");
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message||"some error occured while saving in databse"
        });
    });
};
exports.getProduct=(req,res)=>{
    State.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while retriving product"
        });
    });
};