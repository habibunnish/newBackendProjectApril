const db=require("../models");
const Cart=db.cart;

exports.postaddcartDetailsOfAllLocations=(req,res)=>{
    console.log(req.body);
    const cart=new Cart({
        tittle:req.body.tittle,
        area: req.body.area,
        price: req.body.price,
        image:req.body.image,
        location: req.body.location,
        locations:req.body.locations,
        quantity:req.body.quantity,
        prodId:req.body.prodId
        

    });
    cart
    .save(cart)
    .then((data)=>{
        res.send(data);
        console.log("data added successfully");
    })
    .catch((err)=>{
        res.status(500).send({
            message:
            err.message || "some error occured while creating"
        });
    });
};
exports.getaddcartdetailsofAllLocation=(req,res)=>{
    Cart.find()
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

exports.updateDelivery=(req,res)=>{
    if(!req.body){
        return res.status(400).send({
            message: "data to update cannot be empty"
        });
    }
    const id=req.params.id;
    Product.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then((data)=>{
        if(!data){
            res.status(404).send({
                message:`cannot update product with id=${id}.Maybe product was not found`
            });
          
        }else res.send({
            message: "product was updated successfully"
        })
        .catch((err)=>{
            res.status(500).send({
                message:"error updating product with id="+id
            });
        });
    })
}

exports.deleteAllCartLocation=(req,res)=>{
    const id=req.params.id;
    Cart.findByIdAndRemove(id)
    .then((data)=>{
        if(!data){
            res.status(404).send({
                message:`cannot delete  product with id=${id} maybe product was not found`
            });
        }else{
            res.send({
                message:"product was deleted successfully"
            });
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:"could not delte product with id"+id
        });
    });
};