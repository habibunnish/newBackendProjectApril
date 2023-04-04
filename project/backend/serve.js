// const express = require("express");
// const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middleware/errorHandler");
// const dotenv = require("dotenv").config();
// var mongoose=require("mongoose");



// // connectDb();
// const db=require("./app/models");
// db.mongoose
//     .connect(db.url,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     })

//     .then(()=>{
//         console.log("connected to databse!");
//     })
//     .catch(err=>{
//         console.log("cannot connect to databse",err);
//         process.exit()
//     });

// const app = express();

// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use("/api/contacts", require("./routes/contactRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Server running on port http://localhost:${port}`);
// });