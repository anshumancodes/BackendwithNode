const express = require("express");
const router = express.Router();

const {HandleGenerateShortUrl}=require("../controllers/url")

router.post("/",HandleGenerateShortUrl);


module.exports=router;

