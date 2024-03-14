const { string } = require("i/lib/util");
const mongoose=require("mongoose");

const urlSchema= new mongoose.Schema({
    OriginalUrl:{
        type:string,
        required:true,

    },
    shortId:{
        type:string,
        required:true,
        unique:true
        
    }
    ,
    visitHistory:[{timestamp:{
        type:Number,
    }}]
},{timestamp:true})

const URL=mongoose.model("url",urlSchema);

module.exports=URL;