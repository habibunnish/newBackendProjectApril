module.exports=mongoose=>{
    const Product=mongoose.model(
        "product",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                image:String,
                price:Number,
                location:String,
                locations:String,
                quantity:Number
               
               
            },
            {timestamps:true}
        )
    )
    return Product
};