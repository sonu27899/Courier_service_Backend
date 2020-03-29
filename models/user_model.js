let mongoose = require('../dbconnection');

let userSchema = new mongoose.Schema({
    user_id:Number,
    user_name:String,
    gender:String,
    user_email:String,
    user_password:String,
    Address:String,
    City:String,
    Pincode:String,
    Mobile :String
});

module.exports = mongoose.model('usertbls',userSchema);