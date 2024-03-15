const express = require("express");
const router = express.Router();

const {HandleGenerateShortUrl,HandleClickanalytics}=require("../controllers/url")

router.post("/",HandleGenerateShortUrl);
router.get("/analytics/:shortId",HandleClickanalytics);


module.exports=router;

