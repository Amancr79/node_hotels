const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    DishName:{
       type:String},
    Taste:{
        type:String,
        enum:["Spicy", "Sweet" ,"Salted"]
    },
    Price:{
        type:String,
    },
    Type:{
        type:String,
        enum:["Vegetarian", "Non-Vegetarian"],
        require:true
    }
});

module.exports=mongoose.model('Menu',menuSchema);