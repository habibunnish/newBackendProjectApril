module.exports=app=>{
    const state=require("../controllers/state.controller.js");
    var router=require("express").Router();
    router.post("/",state.addProductDetails);
    router.get("/",state.getProduct);
    app.use("/api/state",router);
}