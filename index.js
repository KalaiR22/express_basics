const express = require('express');
const path = require('path');
const logger = require('./logger')

const Member = require('./member')
const app = express();

//middleware init
//app.use(logger);
//get all members
 app.get('/api/member', (req,res)=>{
    res.json(Member)
})
//get one member
app.get('/api/member/:id', (req, res)=>{
    const found = Member.some(mem=>mem.id === (req.params.id))
    if(found){
    res.json(Member.filter(mem=>mem.id === req.params.id));
    }else{
        res.status(400).json({msg:`the id${req.params.id} you are searching is not found`})
    }
})
//set static app
app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT|| 5000;
app.listen(PORT, ()=> console.log(`port is running on ${PORT}`))