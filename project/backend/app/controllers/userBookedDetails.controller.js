const db=require("../models");
const UserBookedData=db.userbookeddata;

exports.UserBookedDetails=(req,res)=>{
    const userbookeddata=new this.UserBookedData({
        tittle: req.body.tittle,
        area: req.body.area,
        price: req.body.price,
        image:req.body.image ,
        email:req.body.email,
        location: req.body.location,
        
    });
    userbookeddata
         .save(userbookeddata)
         .then((data)=>{
            res.send(data);
          console.log("data added to databse successfully");
         })
         .catch((err)=>{
           res.status(500).send({
            message:
                 err.message || "some error occured while saving data"
        });
    });

}