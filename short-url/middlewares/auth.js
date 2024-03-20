const{getUser}=require("../service/auth")
async function restrictToUserOnly(req, res, next) {

    //verify cookie
    const userUid=req.cookies?.cookieID;

    if(!userUid)return res.redirect("/login");

    // if he got a cookie check for his email
    const user=getUser(userUid);
    if(!user)return res.redirect("/login")

    // if both get correct

    req.user=user;
    next()


}
async function checkAuth(req, res, next) {

    //verify cookie
    const userUid=req.cookies?.cookieID;

    

    // if he got a cookie check for his email
    const user=getUser(userUid);
   

    // if both get correct

    req.user=user;
    next()


}

module.exports={restrictToUserOnly,checkAuth};