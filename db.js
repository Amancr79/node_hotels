const mongoose=require('mongoose');

const mongoUrl='mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

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