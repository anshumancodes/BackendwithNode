const user=require("../models/user");
const { v4: uuidv4 } = require('uuid');
const {setUser,getUser}=require("../service/auth")

async function HandleSignup (req,res){
    const {name,email,password}=req.body;

    await user.create({
        name,
        email,
        password
    })

    return res.render("Home");
}
async function HandleLogin (req,res){
    const {name,email,password}=req.body;

    //checks if user already exist in db or not
   const isuser= await user.findOne({
        
        email,
        password
    });
    if(!isuser)return res.send("no such account found");

   
    const jwttoken=setUser(isuser);
    res.cookie("cookieID",jwttoken);

    return res.render("Home");
}

module.exports={HandleSignup,HandleLogin};