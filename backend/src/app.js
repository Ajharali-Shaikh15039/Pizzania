const mongoose = require('mongoose');
const express = require('express');
const app = express();
const DB= 'mongodb+srv://san:TALUHwR8PdlAazUd@cluster0.abowi.mongodb.net/pizzadb?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log(`connection succesful`);
}).catch((err)=>console.log(`no connection`));

app.use(express.json());
const Slot = require('./model/userSchema');

app.use(require('./router/auth')); 

const middleware = (req,res,next)=>{
    console.log(`hello my middleware`);
    next();
}

app.get('/home',(req,res)=>{
    res.send('home works');
})

app.get('/',(req,res)=>{
    res.send('hello world from the server');
})

app.get('/menu',middleware,(req,res)=>{
    res.send('hello from menu');
})

// app.get('/bookslot',(req,res)=>{
//     res.send('book slot from the server');
// })

const port = 3000;
app.listen(port,()=>{
    console.log(`http://localhost:${port}/app listening`);
})