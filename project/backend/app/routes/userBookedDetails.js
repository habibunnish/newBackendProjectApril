module.exports=app=>{
    const userbookeddata=require("../controllers/userBookedDetails.controller.js");
    var router=require("express").Router();

    router.post("/",userbookeddata.userBookedDetails);
    app.use("/api/userBookedDetails",router);
}