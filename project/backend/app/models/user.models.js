module.exports=mongoose=>{
    const User=mongoose.model(
        "user",
        mongoose.Schema(
            {
            user_id: 
            {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "user",
            },
            firstname:
             {
               type:String, 
               required: [true, "Please add the contact name"],
              },
             
            lastname:
            {
                type:String,
                required: [true, "Please add the contact name"],
            },
            street: 
            {
                type:String,
                required: [true, "Please add the contact name"],
            },
            city:
            {
                type:String,
                required: [true, "Please add the contact name"],
            },
            state:
            {
                type:String,
                required: [true, "Please add the contact name"],
             } ,
            zipcode:
            {
                type:Number,
                required: [true, "Please add the contact name"],
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
    return User
}