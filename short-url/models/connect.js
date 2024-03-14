const mongoose=require("mongoose");

async function ConnectToMongodb(uri) {
    try {
      return mongoose.connect(uri);
    } catch (err) {
      console.log(`MongoDB connection error: ${err}`);
      process.exit();
    }
  }

module.exports={ConnectToMongodb};