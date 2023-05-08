module.exports=mongoose=>{
    const Product=mongoose.model(
        "product",
        mongoose.Schema(
            {
                tittle:{type:String,required:true},
                area:{type:String,required:true},
                image:{type:String,required:true},
                price:{type:Number,required:true},
                location:{type:String,required:true},
                locations:{type:String,required:true},
                quantity:{type:Number,}
               
               
            },
            {timestamps:true}
        )
    )
    return Product
};