let mongoose = require('../dbconnection');

let empSchema=new mongoose.Schema({
    
        emp_email:String,
        emp_password:String,
        emp_name:String,
        emp_joining_date:String,
        emp_salary:Number,
        emp_mobile:String,
        emp_city:String,
        emp_gender:String,
        emp_address:String,
        salary_status:String,
        emp_designation:String,
        vehicle_number:String,
        vehicle_name:String
    
});

module.exports = mongoose.model('emptbls',empSchema);

