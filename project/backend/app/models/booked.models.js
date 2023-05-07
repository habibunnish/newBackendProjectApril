module.exports=mongoose=>{
    const Booked=mongoose.model(
        "booked",
        mongoose.Schema(
            {
           tittle:{type:String,required:true},
           area:{type:String,required:true},
           image:{type:String,required:true},
           location:{type:String,required:true},
           quantity:{type:Number},
           total:{type:Number}
        },
        {timestamps:true}
        )
    )
    return Booked
}