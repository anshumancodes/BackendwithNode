const express = require("express");
const users=require("./Userdata.json")
const fs=require("fs")




const app =express()
const PORT=8000;
// express middleware to receive data from the form
app.use(express.urlencoded({extended:false}))

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
// to add new users into then data
app.post("/api/users/" , (req,res)=>{
  const recevied=req.body;
  console.log("received data from client :",recevied);
  users.push({id:users.length+1,...recevied})
  fs.writeFile("./Userdata.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"pending...."})
  })
  
 });
// to update  exisitng user data
app.patch("/api/users/" , (req,res)=>{
 
 return res.json({status:"pending...."})
 
});
// to delete users
app.delete("/api/users/" , (req,res)=>{
 
 return res.json({status:"deleting..."})
 
});
  
app.listen(PORT, () => console.log(`server started at port: ${PORT}`));