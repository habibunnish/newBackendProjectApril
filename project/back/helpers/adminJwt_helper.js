const jwt=require("jsonwebtoken");
const createError=require("http-errors");
module.exports={

    adminSignAccessToken:(adminId)=>{
        return new Promise((resolve,reject)=>{
            const payload={
                iss:"admin site",
            }
            const secret=process.env.ACCESS_TOKEN_SECRET
            const options={
                expiresIn:"8h",
                audience:adminId
            }
            jwt.sign(payload,secret,options,(err,token)=>{
                if(err)
                {
                    console.log(err.message)
                    reject(createError.InternalServerError());
                }
                resolve(token)
            })
        })
    },


    adminVerifyAccessToken:(req,res,next)=>{
        if(!req.headers["authorization"]) return next(createError.Unauthorized())
        const  authHeader=req.headers["authorization"]
        const bearerToken=authHeader.split(" ");
        const token=bearerToken[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,payload)=>{
        if(err){
            const message=err.message==="JsonWebTokenError "? "Unauthorized":err.message
            return next(createError.Unauthorized(message));
        }
        req.payload=payload
        next()
    })
},
    AdminSignRefreshToken:(adminId)=>{
     return new Promise((resolve,reject)=>{
        const payload={}
        const secret=process.env.REFRESH_TOKEN_SECRET
        const options={
            expiresIn:"1y",
            issuer:"my site",
            audience:adminId
        }
        jwt.sign(payload,secret,options,(err,token)=>{
            if(err)
            {
                console.log(err.message);
                reject(createError.InternalServerError());
            }
            resolve(token);
        })
    })
},
    AdminVerifyRefreshToken:(refreshToken)=>{
         return new Promise((resolve,reject)=>{
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,payload)=>{
            if(err) return reject(createError.Unauthorized());
            const adminId=payload.aud
            resolve(adminId);
             })
         })
     }
}