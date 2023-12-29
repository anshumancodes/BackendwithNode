function sum(a,b){
    return a+b
}

function greet(user){
    return "hello "+user;
}


// exporting a single function from module
// module.exports=sum;

// exporting all functions  from a module
module.exports={
    sum,
    greet
}

// alternative way to export any module 

// exports.add=(a,b)=>a+b 