const Model = require('../model/Ticket');
const express = require('express')
const token=require('../lib/tokenGenerator')

const router = express.Router()
router.post('/makeTicket',  async(req,res)=>{
    const data=new Model({
        Token:token(),
        Name:req.body.name
    })
    try{
        const SaveTicket= await data.save()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})
router.get('/ticket/:id', async(req,res)=>{
    try{
    const data=await Model.find({Token:req.params.id});
    res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.patch('/updateTicket/:id', async(req,res)=>{
    try{
        const id=req.params.id
        const dataToUpdate=req.body
        const options={new:true}

        const result= await Model.findOneAndUpdate(id,dataToUpdate,options)
        res.send(result)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})
module.exports = router;