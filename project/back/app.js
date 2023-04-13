const express=require("express");
const createError=require("http-errors");
const cookieParser=require("cookie-parser");
const cors=require("cors");
require("dotenv").config();
const app=express();
const AuthRoute=require("./Routes/Auth.route");
const {verifyAccessToken}=require("./helpers/jwt_hepler");
const morgan = require("morgan");
const { adminVerifyAccessToken } = require("./helpers/adminJwt_helper");

app.use(cookieParser());

app.use(morgan("dev"))
require("./helpers/init_mongodb");


app.use(cors({
    origin:"http://localhost:4200"
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hi welcome");
})

// Route to set the cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('accesstoken', 'ACCESS_TOKEN_SECRET', { httpOnly: true });
  res.send('Cookie set successfully');
});

// Route to get the cookie
app.get('/get-cookie', (req, res) => {
  const token = req.cookies.accesstoken;
  res.send(`Token value is ${accesstoken}`);
});



app.get("/", verifyAccessToken, async(req,res,next)=>{
    // console.log(`this is the cookie awesome ${req.cookies.jwt}`);
    console.log(req.headers["authorization"]);
    res.send("user hello");
});

app.get("/", adminVerifyAccessToken,async(req,res,next)=>{
    console.log(req.headers["authorization"]);
    res.send("admin hello");
});

app.get("/auth/register",(req,res)=>{
    res.send("registered")
});

app.get("/auth/login",(req,res)=>{
    res.send("login ");
});

app.get("/auth/adminlogin",(req,res)=>{
    res.send("login ");
});
app.get("/auth/adminregister",(req,res)=>{
    res.send("registered")
});

app.use("/auth",AuthRoute);


app.use(async(req,res,next)=>{
    next(createError.NotFound("ROUTE NOT FOUND"));
})
app.use((err,req,res,next)=>{
    res.status(err.status||500);
    res.send({
        error:{
            status:err.status ||500,
            message:err.message,

        }
    })
})




const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server lisyening on port http://localhost:${PORT}`);
})