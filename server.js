const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();


const personRoutes=require('./router/personRouter');
const menuRoutes=require('./router/menuRouter');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);
const PORT=process.env.PORT || 3000;

app.listen(PORT ,()=>{
    console.log("listening on port 3000");
});