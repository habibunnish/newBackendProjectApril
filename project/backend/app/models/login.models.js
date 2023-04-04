module.exports=mongoose=>{
    const Login=mongoose.model(
        "login",
        mongoose.Schema({
            email:
            {
                type:String,
                required: [true, "Please add the user email address"],
                unique: [true, "Email address already taken"],
            },
            password:
            {
                type:String,
                required: [true, "Please add the user password"],
            },
        },
        { timestamps:true }
        )
    )
    return Login
}