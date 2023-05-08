module.exports=mongoose=>{
    const Cart=mongoose.model(
        "cart",
        mongoose.Schema(
            {
                tittle:{type:String,required:true},
                area:{type:String,required:true},
                image:{type:String,required:true},
                price:{type:Number,required:true},
                location:{type:String,required:true},
                locations:{type:String,required:true},
                quantity:{type:Number,required:true},
             
            
               
            },
            {timestamps:true}
        )
    )
    return Cart
};