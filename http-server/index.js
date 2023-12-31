const http =require("http")
const fs=require('fs');
const { time, error } = require("console");

const Url=require("url")

const server = http.createServer((req,res)=>{
    console.log("new request received on " + req.url);
    const userIP = req.connection.remoteAddress;

    const userdata = `user made a ${req.method} request on : ${new Date()} from ${userIP} on ${req.url} \n`;
   
    const myurl=Url.parse(req.url,true)
    console.log(myurl)

    fs.appendFile('userlog.txt', userdata, (err,data)=>{
       switch(myurl.pathname) {
         
        case "/":
            res.end("hello from server request fullfilled")
            break
        case "/about":
            const ShowUserName=myurl.query.username
            res.end(`hello ${ShowUserName}`)
            break
        


       }

       
       
       
       

    });

   
});

server.listen(8000,()=>{
    console.log("server started")
})