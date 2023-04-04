module.exports=mongoose=>{
    const City=mongoose.model(
        "city",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                price:String,
                location:String,
                image:String,
            },
            {timestamps:true}
        )

    );
    return City;
}