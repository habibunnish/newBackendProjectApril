const dbConfig=require("../config/db.config");
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;

const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
db.product=require("./product.models.js")(mongoose);
db.user=require("./user.models.js")(mongoose);
db.cart=require("./cart.models.js")(mongoose);
db.userbookeddata=require("./userBookedDetails.models.js")(mongoose);
db.login=require("./login.models.js")(mongoose);
db.main=require("./main.models.js")(mongoose);
db.city=require("./city.models.js")(mongoose);
db.admin=require("./admin.models.js")(mongoose);

module.exports=db;