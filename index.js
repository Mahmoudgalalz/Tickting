require('dotenv').config()
const express= require('express')
const mongoose=require('mongoose')
const routes = require('./routes/routes');
const mongoString=process.env.DATABASE_URL
const app=express();
app.use(express.json())

mongoose.connect(mongoString)
const DB=mongoose.connection

DB.on('error',(err)=>{
    console.log(err)
})

DB.once('connected',()=>{
    console.log("Database is connected")
})
app.use('/api', routes)
app.listen(3000,()=>{
    console.log('Serve Started at 3000')
})
module.exports=app