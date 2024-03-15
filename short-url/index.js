const express = require("express");
const app = express();
const port = 8000;
const urlroute=require("./routes/url")
const {ConnectToMongodb}=require("./models/connect")
const URL=require("./models/url")

ConnectToMongodb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{
    console.log("Database Connected Successfully!");
})
.catch((err)=>{
    console.error(err);
});

app.use(express.json());

app.use("/url",urlroute);


// redirects and updates timestamp of the click
app.use('/:shortid',async (req,res) => {
    const shortId=req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
      );

   res.redirect('https://' +entry.OriginalUrl);

    
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

