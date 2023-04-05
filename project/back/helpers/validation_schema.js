const  joi=require("@hapi/joi");
const authSchema=joi.object({
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(4).required(),
    firstname:joi.string(),
    lastname:joi.string(),
    state:joi.string(),
    city:joi.string(),
    street:joi.string(),
    zipcode:joi.number(),
});



module.exports={
    authSchema,
}