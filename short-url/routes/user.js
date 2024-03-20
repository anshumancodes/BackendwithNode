const express = require("express");
const {HandleSignup,HandleLogin}=require("../controllers/user")

const router = express.Router();

router.post("/",HandleSignup);
router.post("/login",HandleLogin);

module.exports=router;