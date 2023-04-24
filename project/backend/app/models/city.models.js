module.exports=mongoose=>{
    const City=mongoose.model(
        "city",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                price:Number,
                location:String,
                image:String,
                locations:String,
                quantity:Number
            },
            {timestamps:true}
        )

    );
    return City;
}