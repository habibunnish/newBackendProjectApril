module.exports=app=>{
    const admin=require("../controllers/admin.controller.js");
    var router=require("express").Router();

    router.post("/",admin.adminRegister);
    router.post("/",admin.adminLoginDetailsGet);
    

    app.use('/api/admin',router);
}