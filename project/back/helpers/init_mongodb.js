const mongoose=require("mongoose");
mongoose.connect(process.env.MONGODB_URI,{
    dbName:process.env.DB_NAME,
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
})
.then(()=>{
    console.log("mongodb connecteed");
})
.catch((err)=>console.log(err.message))
mongoose.connection.on("connected",()=>{
    console.log("mongoose connecteed to db ");
});
mongoose.connection.on("error",()=>{
    console.log(err.message);
})
mongoose.connection.on("disconnected",()=>{
   console.log("connection disconnected")
});

process.on("SIGINT",async()=>{
    await mongoose.connection.close();
    process.exit(o)
})