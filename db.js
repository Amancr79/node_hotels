const mongoose=require('mongoose');
require('dotenv').config();
//local : const mongoUrl='mongodb://127.0.0.1:27017/hotels';
const mongoUrl=process.env.DB_URL;

mongoose.connect(mongoUrl)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('mongo db is connected');
})

db.on('error',(e)=>{
    console.log('some error occurred' , e);
})

db.on('disconnected',()=>{
    console.log('mongo db is disconnected');
})


module.exports=db;