module.exports=app=>{
    const cart=require("../controllers/cart.controller.js");
    var router=require("express").Router();

    // router.get("/:id",cart.getProducts);
    router.get("/",cart.getaddcartdetailsofAllLocation);
    router.delete("/:id",cart.deleteAllCartLocation);
    router.post("/",cart.postaddcartDetailsOfAllLocations);
    app.use("/api/cart",router);
}