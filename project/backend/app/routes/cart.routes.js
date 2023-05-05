module.exports=app=>{
    const cart=require("../controllers/cart.controller.js");
    var router=require("express").Router();
    router.get("/",cart.getAddCartDetailsOfAllLocation);
    router.delete("/:id",cart.deleteAllCartLocation);
    router.post("/",cart.postAddCartDetailsOfAllLocations);
    app.use("/api/cart",router);
}