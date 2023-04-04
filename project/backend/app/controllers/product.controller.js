const db=require("../models");
const Product=db.product;

exports.addProductDetails=(req,res)=>{
    const product=new Product({
        tittle: req.body.tittle,
        area: req.body.area,
        price: req.body.price,
        image:req.body.image ,
        location: req.body.location,
        locations:req.body.locations,
    });
    product
        .save(product)
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
};
exports.getProduct=(req,res)=>{
    Product.find()
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
exports.getedit=(req,res)=>{
    const id=req.params.id;
    Product.findById(id)
        .then((data)=>{
            if(!data)
                res.status(404).send({message:"Not found product with id" + id});
            else res.send(data);
        })
        .catch((err)=>{
            res.status(500).send({message:"error  while retriving product with id="+id});
        });
};
exports.putProduct=(req,res)=>{
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
};
exports.deleteproductchennai=(req,res)=>{
    const id=req.params.id;
    Product.findByIdAndRemove(id)
        .then((data)=>{
            if(!data){
                res.status(404).send({
                    message:`cannot delte product with id=${id} product not found`
                });
            }else{
                res.send({
                    message:"product was delted successfully"
                });
            }
        }).catch((err)=>{
            res.status(500).send({
                message:"could not delete product with id="+id
            });
        });
};
exports.deleteProduct=(req,res)=>{
    const id=req.params.id;
    Product.findByIdAndRemove(id)
        .then((data)=>{
            if(!data){
                res.status(404).send({
                    message:`cannot delte product with id=${id} product not found`
                });
            }else{
                res.send({
                    message:"product was delted successfully"
                });
            }
        }).catch((err)=>{
            res.status(500).send({
                message:"could not delete product with id="+id
            });
        });
}