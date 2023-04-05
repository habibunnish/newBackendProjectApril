module.exports=app=>{
    const city=require("../controllers/city.controller.js");
    var router=require("express").Router();

    router.post("/chennai",city.addProductsDetails);
    router.post("/bangluru",city.addProductsDetailsbangluru);
    router.post("/jammu",city.addProductsDetailsjammu);
    router.post("/goa",city.addProductsDetailsroyapuram);
    app.use("/api/city",router);

}