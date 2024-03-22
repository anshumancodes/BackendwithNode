const jwt = require("jsonwebtoken");
require('dotenv').config();
// Accessing the JWT secret key from process.env
const jwt_secret_key = process.env.JWT_SECRET_KEY;

function setUser(user) {
   const payload={
    _id:user._id,
    email:user.email
   }
   return jwt.sign(payload,jwt_secret_key)

};

function getUser(token){
    if(!token)return null
    try {
        return jwt.verify(token,jwt_secret_key); 
        
    } catch (error) {
        return null
        
    }
}

module.exports={
    setUser,getUser
}