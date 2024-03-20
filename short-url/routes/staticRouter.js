
const express = require("express");
const router = express.Router();
const URL=require("../models/url")

//route handling here 

router.get("/",async(req,res)=>{
    if (!req.user) return res.redirect("/login");
    const allurls = await URL.find({ createdBy:req.user._id });
   
    return res.render("Home", {
        urls: allurls,
      });
})

router.get("/signup",(req,res)=>{
    return res.render("Signup");
});
router.get("/login",(req,res)=>{
    return res.render("login");
});

module.exports=router;