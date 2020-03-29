let mongoose = require('../dbconnection');

let orderSchema = new mongoose.Schema({
    order_id:Number,
    order_date:String,
    expected_amount:Number,
    order_amount:Number,
    fk_user_email:String,
    fk_delievery_assign:String,
    order_status:String
});

module.exports = mongoose.model('ordertbls',orderSchema);