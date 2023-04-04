module.exports=app=>{
    const city=require("../controllers/city.controller.js");
    var router=require("express").Router();

    router.post("/",city.addProductsDetails);
    router.post("/",city.addProductsDetailsbangluru);
    router.post("/",city.addProductsDetailsjammu);
    router.post("/",city.addProductsDetailsroyapuram);
    app.use("/api/city",router);

}