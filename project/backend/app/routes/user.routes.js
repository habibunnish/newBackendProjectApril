module.exports=app=>{
    const user=require("../controllers/user.controller.js");
    var router=require("express").Router();
    // const validateToken = require("../../middleware/jwt");
    // router.use(validateToken);

    router.post("/",user.register);
    router.get("/",user.userRegisterDetails);
    router.get("/",user.adminLoginDetailsGet);
    

    app.use('/api/user',router);
}