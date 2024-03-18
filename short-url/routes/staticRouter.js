const express = require("express");
const router = express.Router();

//route handling here 

router.get("/",async(req,res)=>{
    return res.render("Home");
})
module.exports=router;