let express = require('express');
let user = require('../models/user_model');
let router = express.Router();

router.get('/',(req,res)=>{
    user.find().then(doc=>{
        res.json(doc);
    }).catch(err=>{
        res.json(err);
    })
})

router.post('/:user_email',(req,res)=>{
    user.find({user_email:req.params.user_email,user_password:req.body.user_password}).then(doc=>{
        res.json(doc);
    })
})

router.get('/:user_email',(req,res)=>{
    user.find({user_email:req.params.user_email}).then(doc=>{
        res.json(doc);
    })
})

router.post('/',(req,res)=>{
    let model = new user(req.body);
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
    user.update({user_email:req.body.user_email},req.body)
    .then(doc=>{
        res.json(doc);
    })
    .catch(err=>{
        res.send(err);
    })
})

module.exports = router;    