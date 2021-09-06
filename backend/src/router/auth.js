const express = require('express');
const router = express.Router();
const Slot = require("../model/slotSchema");
router.get('/',(req,res)=>{
console.log(`hello data from router`);
res.send('hello data from router');
});

router.post('/bookslot',(req,res)=>{
    const {name,email,phone,time} = req.body;
    if(!name || !email || !phone || !time){
        return res.status(402).json({error:'please fill the property'});
    }
    // else{
    //     console.log(name);
    // res.send({message:req.body});
    // }
    console.log(req.body);
    const slot = new Slot ({ name, email, phone, time });
    slot.save().then(() => {
            res.status(201).json({ message: "slot booked succesfully" });
            }).catch((err) => res.status(500).json({ error: "failed to book" }));
        
});

module.exports = router;
