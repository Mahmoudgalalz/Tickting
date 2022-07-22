const mongoose=require('mongoose')

const ticket=new mongoose.Schema({
    Token:{
        required:true,
        type:String
    },
    Name:{
        required:true,
        type:String
    },
    info:{
        type:String
    }
    
})

module.exports=mongoose.model('ticket',ticket)