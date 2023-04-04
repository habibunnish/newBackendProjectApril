const jwt = require('jsonwebtoken');
const express=require("express");
const app=express();
const asyncHandler = require("express-async-handler");

const User = require("../app/models/user.models.js");

const secretKey = 'habi123';
const validateToken = asyncHandler( async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.authorization;;
    if (!authHeader) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
  
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, secretKey);
      const user = await User.findOne({ _id: decoded._id });
      if (!user) {
        return res.status(401).send({ error: 'Unauthorized' });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Unauthorized' });
    }
  });

  app.get('/', validateToken, (req, res) => {
    res.send({ message: 'This is the dashboard' });
  });
 
  
//exception only  
module.exports=validateToken;