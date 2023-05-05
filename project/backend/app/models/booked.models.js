module.exports=mongoose=>{
    const Booked=mongoose.model(
        "booked",
        mongoose.Schema(
            {
           tittle:String,
           area:String,
           image:String,
           location:String,
           quantity:Number,
           total:Number
        },
        {timestamps:true}
        )
    )
    return Booked
}