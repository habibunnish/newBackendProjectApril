module.exports=mongoose=>{
    const State=mongoose.model(
        "state",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                image:String,
                price:Number,
                location:String,
                locations:String,
            },
            {timestamps:true}
        )
    )
    return State
}