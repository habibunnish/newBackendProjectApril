const joi=require("@hapi/joi");
const adminLoginSchema=joi.object({
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(4).required()
})

module.exports={
    adminLoginSchema,
}