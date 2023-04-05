const mongoose=require("mongoose");
const Schema=mongoose.Schema
const bcrypt=require("bcrypt");
const {string}=require("@hapi/joi");

const adminLoginSchema=new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

adminLoginSchema.pre("save",async function(next){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hashSync(this.password,salt)
        this.password=hashPassword
        next()
        console.log(this.email,this.password)
    }
    catch(error){
        next(error);
    }
})
adminLoginSchema.methods.isValidPassword=async function(password){
    try{
        return bcrypt.compare(password,this.password)
    }
    catch(error){
        throw error
    }
}

const Admin=mongoose.model("admin",adminLoginSchema);
module.exports=Admin;