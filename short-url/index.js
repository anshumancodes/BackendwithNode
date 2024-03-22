const express = require("express");
const cookieParser=require("cookie-parser")
const app = express();
const port = 8000;

const {ConnectToMongodb}=require("./models/connect")
const URL=require("./models/url")
const path =require("path")

// path registers
const urlroute=require("./routes/url")
const StaticRouter=require('./routes/staticRouter');
const userRoute=require("./routes/user")

// handleing views
app.set('views', path.resolve("./views"));
app.set('view engine', 'ejs');

//mongodb connect
ConnectToMongodb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{
    console.log("Database Connected Successfully!");
})
.catch((err)=>{
    console.error(err);
});


//middlewares
const {restrictToUserOnly,checkAuth}=require("./middlewares/auth")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.use("/url",restrictToUserOnly,urlroute);
app.use("/user",userRoute);
app.use("/",checkAuth,StaticRouter);






// redirects and updates timestamp of the click
app.use('/url/:shortid',async (req,res) => {
    const shortId=req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } }
      );

   res.redirect('https://'+entry.OriginalUrl);

    
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

