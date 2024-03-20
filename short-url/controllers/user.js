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

   const isuser= await user.findOne({
        
        email,
        password
    });
    if(!isuser)return res.send("no such account found");

    const sessionid=uuidv4();
    setUser(sessionid,isuser);
    res.cookie("cookieID",sessionid);

    return res.render("Home");
}

module.exports={HandleSignup,HandleLogin};