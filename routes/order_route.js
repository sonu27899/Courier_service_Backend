let express = require('express');
let order = require('../models/order_model');
let router = express.Router();

router.get('/',(req,res)=>{
    order.find().then(doc=>{
        res.json(doc);
    }).catch(err=>{
        res.json(err);
    })
})



router.get('/:order_id',(req,res)=>{
    order.find({order_id:req.params.order_id}).then(doc=>{
        res.json(doc);
    })
})

router.post('/',(req,res)=>{
    let model = new order(req.body);
    model.save().then(doc=>{
        if(!doc || doc.length===0){
            return res.status(500).send(doc);
        }
        res.send(doc);
    
    }).catch(err=>{
        res.send(err);
    })
})

router.put('/',(req,res)=>{
    order.update({order_id:req.body.order_id},req.body)
    .then(doc=>{
        res.json(doc);
    })
    .catch(err=>{
        res.send(err);
    })
})

router.delete("/:order_id",(req,res)=>{
    order.remove({order_id:req.params.order_id})
    .then(doc=>{
        res.json(doc);
    }).catch(err=>{
        res.json(err);
    })
})

module.exports = router;    