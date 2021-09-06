const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
console.log(`hello data from router`);
res.send('hello data from router');
});

router.post('/bookslot',(req,res)=>{
    console.log(req.body);
    // res.send('this is bookslot');
    res.json({message:req.body});
});


module.exports = router;
