let express = require('express');
let emp = require('../models/emp_model');
let router = express.Router();

router.get('/',(req,res)=>{
    emp.find().then(doc=>{
        res.json(doc);
    }).catch(err=>{
        res.json(err);
    })
})


router.get('/:emp_email',(req,res)=>{
    emp.find({emp_email:req.params.emp_email}).then(doc=>{
        res.json(doc);
    })
})

router.post('/:emp_email',(req,res)=>{
    emp.find({emp_email:req.params.emp_email,emp_password:req.body.emp_password}).then(doc=>{
        res.json(doc);
    })
})

router.post('/',(req,res)=>{
    let model = new emp(req.body);
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
    emp.update({emp_email:req.body.emp_email},req.body)
    .then(doc=>{
        res.json(doc);
    })
    .catch(err=>{
        res.send(err);
    })
})

router.delete("/:emp_email",(req,res)=>{
    emp.remove({emp_email:req.params.emp_email})
    .then(doc=>{
        res.json(doc);
    }).catch(err=>{
        res.json(err);
    })
})
module.exports = router;    