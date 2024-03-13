const moongoose=require("mongoose");


// mongodb schema

const usersSchema = new moongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type:String
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  gender: {
    type: String,
    required: true
  },
  job_title: {
    type: String,
    required: true
  }
});
// user model in mongodb
const User=moongoose.model('User',usersSchema);

module.exports=User;