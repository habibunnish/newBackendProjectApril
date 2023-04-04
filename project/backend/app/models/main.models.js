module.exports=mongoose=>{
    const Main=mongoose.model(
        "main",
        mongoose.Schema(
            {
                tittle:String,
                image:String,
                para:String
            },
            {timestamps:true}
        )
    )
    return Main
}