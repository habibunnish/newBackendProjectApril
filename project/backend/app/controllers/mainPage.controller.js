const db=require("../models");
const mainPage=db.main;

exports.main=(req,res)=>{
    const main=new mainPage({
        tittle:req.body.tittle,
        image:req.body.image,
        para:req.body.para
    });
    const { error, value } = main.validate(req.body);
    if (error) {
      return res.status(400).send({
        message: error.details[0].message
      });
    }
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
    console.log("MAINPAGE GOA CONTROLLER");
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