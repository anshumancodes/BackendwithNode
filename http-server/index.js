// const http =require("http")
// const fs=require('fs');
// const { time, error } = require("console");

// const Url=require("url")

// lets build the server logic with express

const express =require("express")

const Myapp=express()

Myapp.get("/",(req,res)=>{
    return res.send("hello this is my app's home page")
})


Myapp.get("/about",(req,res)=>{
    return res.send("hello " + req.query.username)
})


// express imports and uses http module in the hood to listen to the port
Myapp.listen(8000,()=>{console.log("server started")})


// const server = http.createServer(Myapp);

// server.listen(8000,()=>{
//     console.log("server started")
// })



// old code 

/* console.log("new request received on " + req.url);
    const userIP = req.connection.remoteAddress;

    const userdata = `user made a ${req.method} request on : ${new Date()} from ${userIP} on ${req.url} \n`;
   
    const myurl=Url.parse(req.url,true)
    console.log(myurl)

    fs.appendFile('userlog.txt', userdata, (err,data)=>{
       switch(myurl.pathname) {
         
        case "/":
            if(req.method="GET") res.end("home page")
            
            break
        case "/about":
            const ShowUserName=myurl.query.username
            res.end(`hello ${ShowUserName}`)
            break
        case "/reg":
            if(req.method="GET") res.end("resgister form")

            else if (req.method) {
                // run db queries

                res.end("sucessfully registered ")
            }


       }

       
       
       
       

    });

    */