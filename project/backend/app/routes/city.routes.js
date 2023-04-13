module.exports=app=>{
    const city=require("../controllers/city.controller.js");
    var router=require("express").Router();

    router.post("/Chennai",city.addProductsDetails);
    router.post("/Banguluru",city.addProductsDetailsbangluru);
    router.post("/Jammu",city.addProductsDetailsjammu);
    router.post("/goa",city.addProductsDetailsroyapuram);
    app.use("/api/city",router);

}