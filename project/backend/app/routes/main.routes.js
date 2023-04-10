const { route } = require("../../../back/Routes/Auth.route.js");

module.exports=app=>{
    const main=require("../../../backend/app/controllers/mainPage.controller.js");
    var router=require("express").Router();

    router.post("/",main.main);
    router.post("/main2",main.main2);
    router.get("/mainpage",main.mainPage);
    router.get("/goa",main.mainpageGoa);
    router.get("/bangluru",main.bangaluru);
    router.get("/jammu",main.jammu);
    app.use("/api/main",router);
}