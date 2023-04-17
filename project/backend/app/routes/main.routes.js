

module.exports=app=>{
    const main=require("../../../backend/app/controllers/mainPage.controller.js");
    var router=require("express").Router();

    router.post("/",main.main);
    router.get("/mainpage",main.mainPage);
    router.get("/goa",main.mainpageGoa);
    router.get("/bangluru",main.bangaluru);
    router.get("/jammu",main.jammu);
    app.use("/api/main",router);
}