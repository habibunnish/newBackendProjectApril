module.exports=mongoose=>{
    const Main=mongoose.model(
        "main",
        mongoose.Schema(
            {
                tittle:{type:String,required:true},
                image:{type:String,required:true},
                para:{type:String,required:true}
            },
            {timestamps:true}
        )
    )
    return Main
}


