const http =require("http")
const fs=require('fs');
const { time } = require("console");

const server = http.createServer((req,res)=>{
    console.log("new request received");
    const userIP = req.connection.remoteAddress;

    const userdata = `user requested on: ${new Date()} \n from ${userIP}`;
   


    fs.appendFile('userlog.txt', userdata, (err,data)=>{
        res.end("hello from server request fullfilled!")

    });

   
});

server.listen(8000,()=>{
    console.log("server started")
})