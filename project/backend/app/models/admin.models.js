module.exports=mongoose=>{
    const Admin=mongoose.model(
        "admin",
        mongoose.Schema(
            {
            admin_id: 
            {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "admin",
            },
           
            email: 
            {
                type:String,
                required: [true, "Please add the contact name"],
            },
            password:
            {
                type:String,
                required: [true, "Please add the contact name"],
            }
        },
        {timestamps:true}
       )
    )
    return Admin
}