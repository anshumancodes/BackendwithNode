
const { nanoid } = require('nanoid');
const URL= require("../models/url")

async function HandleGenerateShortUrl(req, res) {

    const body=req.body;

    if(!body.url) return res.status(400).send({error:"You must provide a Url"});



    const ShortID=nanoid(10);  //generate a random alphanumeric string of length (parameter)

    await URL.create({
        shortId: ShortID,
        OriginalUrl:body.url,
        visitHistory:[],
    });


    // return res.json({id:ShortID});
    return res.render("Home",{
        id:ShortID
    });



}
async function HandleClickanalytics(req,res){

    const shortId=req.params.shortId;
    
    if(!shortId) return res.status(400).send({error:"You must provide a shortId to know coorseponding analytics"});
    const clicks=await URL.findOne({ shortId });

    return res.json({Total_clicks:clicks.visitHistory.length});


}

module.exports={HandleGenerateShortUrl,HandleClickanalytics}