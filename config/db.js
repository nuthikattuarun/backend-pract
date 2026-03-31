const mongoose = require("mongoose");

const connectDb =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb connected")
}catch(err){
    console.log(err);
}
}

module.exports = connectDb;