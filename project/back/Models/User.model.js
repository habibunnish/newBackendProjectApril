const mongoose=require("mongoose");
const Schema=mongoose.Schema
const bcrypt=require("bcrypt");
const { string } = require("@hapi/joi");


const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        
    },
    lastname:{
        type:String,
        
    },
    state:{
        type:String,
       
    },
    city:{
        type:String,
        
    },
    street:{
        type:String,
        
    },
    zipcode:{
        type:Number,
        
    }
})

UserSchema.pre("save",async function(next){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hashSync(this.password,salt)
        this.password=hashPassword
        next()
        console.log(this.email,this.password);

    }
    catch(error){
        next(error);
    }
});
UserSchema.methods.isValidPassword=async function(password){
    try{
      return await bcrypt.compare(password,this.password)
    }
    catch(error){
        throw error
    }
}
const User=mongoose.model("user",UserSchema);
module.exports=User;