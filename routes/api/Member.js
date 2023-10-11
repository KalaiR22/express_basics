const express = require('express');
const router = express.Router();
const member = require('../../member')
const uuid = require('uuid');

//get all members
router.get('/', (req,res)=>{
    res.json(member)
})
//get one member
router.get('/:id', (req, res)=>{
    const found = member.some(mem=>mem.id === req.params.id)
    if(found){
    res.json(member.filter(mem=>mem.id === req.params.id));
    }else{
        res.status(400).json({msg:`the id ${req.params.id} you are searching is not found`})
    }
})

// create member
router.post('/', (req, res) => {
   const newMember = {
      id: uuid.v4(), // Generate a UUID for the new member
      name: req.body.name,
      email: req.body.email,
      status: 'active'
   }

   if (!newMember.name || !newMember.email) {
      return res.status(400).json({ msg: "Enter your email and name" });
   }

   member.push(newMember);
   res.json(member);
});

//update member

router.put('/:id', (req, res)=>{
    const found = member.some(mem => mem.id === req.params.id);

    if(found){
        const updatemember = req.body;
        
        member.forEach(mem => {
            if( mem.id === req.params.id){
                mem.name = updatemember.name ? updatemember.name: mem.name;
                mem.email = updatemember.email ? updatemember.email: mem.email;

                res.json({msg:"Members updates", member})
            }
        })
    }else{
        res.status(400).json({msg:`the id ${req.params.id} you are requested is not found`})
    }
})

//delete member
router.delete('/:id', (req, res)=>{
    const found = member.some(mem=>mem.id === req.params.id)
    if(found){
    res.json({
     msg:"member deleted",
     member:member.filter(mem=>mem.id !== req.params.id)});
    }else{
        res.status(400).json({msg:`the id ${req.params.id} you are searching is not found`})
    }
})

module.exports=router;