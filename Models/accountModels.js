const mongoose=require('mongoose');

const accountSchema=new mongoose.Schema({
    name : String,
    age : Number,
    email: String
    
});

const account=mongoose.model('account',accountSchema);

module.exports = account;