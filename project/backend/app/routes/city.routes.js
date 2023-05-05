module.exports=app=>{
    const city=require("../controllers/city.controller.js");
    var router=require("express").Router();

    router.post("/Chennai",city.addProductsDetails);
    router.post("/Banguluru",city.addProductsDetailsBangluru);
    router.post("/Jammu",city.addProductsDetailsJammu);
    router.post("/goa",city.addProductsDetailsRoyapuram);
    app.use("/api/city",router);

}