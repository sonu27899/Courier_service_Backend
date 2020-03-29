let express = require('express');
let order = require('../models/order_model');
let router = express.Router();

router.get('/:fk_user_email',(req,res)=>{
    order.find({fk_user_email:req.params.fk_user_email}).then(doc=>{
        res.json(doc);
    })
})


module.exports = router;    