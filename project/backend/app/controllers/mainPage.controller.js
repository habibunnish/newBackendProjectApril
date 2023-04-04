const db=require("../models");
const mainPage=db.main;

exports.main=(req,res)=>{
    const main=new mainPage({
        tittle:req.body.tittle,
        image:req.body.image,
        para:req.body.para
    });
    main.save(main).then((data)=>{
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
exports.mainPage=(req,res)=>{
    mainPage.find()
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
exports. mainpageGoa=(req,res)=>{
    console.log("heeeeeeeeeeeeeeeeeee");
    mainPage.find()
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

exports.bangaluru=(req,res)=>{
    mainPage.find()
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
exports.jammu=(req,res)=>{
    mainPage.find()
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