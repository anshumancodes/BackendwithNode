
// restapi 
const express = require("express");
const router=express.Router()

router.get("/" ,async(req,res)=>{
  const allUsers=await User.find({})
    res.json(allUsers)
});

router.get("/:userid" , async(req,res)=>{
    const user=await User.findById(req.params.userid)
    
   return res.json(user);
   
});
router.post("/" , async(req,res)=>{
    // const recevied=req.body;
    // console.log("received data from client :",recevied);
    const body =req.body;
    // so we need to check conditionals
    if (
      !body ||
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
      //  error handle if there a error while creatin the user\
      
      try{
        await User.create({
          firstName:body.firstName,
          lastname:body.lastName,
          email:body.email,
          gender:body.gender,
          job_title:body.job_title
    
         })
  
         return res.status(201).json({ success: "User created successfully" });
      }catch(err){
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    
    
   });
  
  
  
  // to update  exisitng user data
  router.patch("/api/users/" , (req,res)=>{
   
   return res.json({status:"pending...."})
   
  });
  // to delete users
  router.delete("/api/users/" , (req,res)=>{
   
   return res.json({status:"deleting..."})
   
  });
    

module.exports=router;