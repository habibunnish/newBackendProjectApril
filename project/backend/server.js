const express=require("express");
const cors=require("cors");
const createError=require("http-errors");

require("dotenv").config();
const app=express();



app.use(cors({
    origin:"http://localhost:4200",
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    // console.log(req.headers["authorization"]);
    res.send("hello");
    // res.json({message:"welcome to room booking site"});
});





const db=require("./app/models");
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to the databse");
})
.catch(err=>{
    console.log("cannot connect to databse");
    process.exit();
})



require("./app/routes/product.routes")(app);
require("./app/routes/cart.routes")(app);
require("./app/routes/main.routes")(app);
require("./app/routes/city.routes")(app);
require("./app/routes/booked.routes")(app);



const PORT=process.env.PORT || 8082;
app.listen(PORT,()=>{
    
    console.log(`server is running on http://localhost:${PORT}`);
})