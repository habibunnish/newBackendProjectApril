const db=require("../models");
const City=db.city;

exports.addProductsDetails=(req,res)=>{
    const city1=new City({
        tittle:req.body.tittle,
        area:req.body.area,
        price:req.body.price,
        location:req.body.location,
        locations:req.body.locations,
        image:req.body.image,
        quantity:req.body.quantity
    });
    city1
        .save(city1)
        .then((data)=>{
            res.send(data);
            console.log("data added to databse successfull");
        })
        .catch((err)=>{
            res.status(500).send({
                message:
                     err.message || "some error occured while saving data"
            });
        });
    };

    exports.addProductsDetailsBangluru=(req,res)=>{
        const city2=new City({
            tittle:req.body.tittle,
            area:req.body.area,
            price:req.body.price,
            location:req.body.location,
            locations:req.body.locations,
            image:req.body.image
        });
        city2
            .save(city2)
            .then((data)=>{
                res.send(data);
                console.log("data added to databse successfull");
            })
            .catch((err)=>{
                res.status(500).send({
                    message:
                         err.message || "some error occured while saving data"
                });
            });
        };

    exports.addProductsDetailsRoyapuram=(req,res)=>{
        const city3=new City({
            tittle:req.body.tittle,
            area:req.body.area,
            price:req.body.price,
            location:req.body.location,
            locations:req.body.locations,
            image:req.body.image
        });
        city3
            .save(city3)
            .then((data)=>{
                res.send(data);
                console.log("data added to databse successfull");
            })
            .catch((err)=>{
                res.status(500).send({
                    message:
                         err.message || "some error occured while saving data"
                });
            });
        };
    
    exports.addProductsDetailsJammu=(req,res)=>{
        const city4=new City({
            tittle:req.body.tittle,
            area:req.body.area,
            price:req.body.price,
            location:req.body.location,
            locations:req.body.locations,
            image:req.body.image
        });
        city4
            .save(city4)
            .then((data)=>{
                res.send(data);
                console.log("data added to databse successfull");
            })
            .catch((err)=>{
                res.status(500).send({
                    message:
                         err.message || "some error occured while saving data"
                });
            });
        };
    