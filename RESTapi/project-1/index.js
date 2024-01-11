const express = require("express");
const users=require("./Userdata.json")

const app =express()
const PORT=8000;

app.get("/" , (req,res)=>{
    res.send("helllo from server");
});
// html rendering for web

app.get("/users", (req, res) => {
    const Htmldata = `
      <ul>
        ${users.map((user) => `<li><a>${user.first_name}</a></li>`).join('')}
      </ul>
    `;
    res.send(Htmldata);
  });


// restapi 

app.get("/api/users" , (req,res)=>{
    res.json(users)
});

  app.get("/api/users/:userid" , (req,res)=>{
    let userid=req.params.userid
   return res.json(users[userid])
   
});
// to update  exisitng user data
app.patch("/api/users/" , (req,res)=>{
 
 return res.json({status:"pending...."})
 
});
// to delete users
app.delete("/api/users/" , (req,res)=>{
 
 return res.json(users[userid])
 
});
  
app.listen(PORT, () => console.log(`server started at port: ${PORT}`));