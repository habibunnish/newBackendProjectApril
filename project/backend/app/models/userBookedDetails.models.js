module.exports=mongoose=>{
    const UserBookedData=mongoose.model(
        "userbookeddata",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                image:String,
                price:Number,
                email:String,
                location:String,
               
            },
            {timestamps:true}
        )
    )
    return UserBookedData
}