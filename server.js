const express=require('express');
const app=express();
const db=require('./db');


const personRoutes=require('./router/personRouter');
const menuRoutes=require('./router/menuRouter');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000 ,()=>{
    console.log("listening on port 3000");
});