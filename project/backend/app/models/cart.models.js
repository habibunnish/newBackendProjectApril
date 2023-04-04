module.exports=mongoose=>{
    const Cart=mongoose.model(
        "cart",
        mongoose.Schema(
            {
                tittle:String,
                area:String,
                image:String,
                price:Number,
                location:String,
                locations:String
               
            },
            {timestamps:true}
        )
    )
    return Cart
};