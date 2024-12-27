const express=require('express');
const router=express.Router();
const Menu=require('../models/menu');
const bodyParser=require('body-parser');
router.use(bodyParser.json());



router.get('/',async(req,res)=>{
    try{
           const data=await Menu.find();
           console.log("data fetched");
           res.status(200).json({data});
    }
    catch(e)
    {
         console.log("error");
         res.status(404).json({e:"Data not found"});
    }
})

router.get('/:tasteType',async(req,res)=>{
    try{
           const tasteType=req.params.tasteType;
           const data=await Menu.find({Taste:tasteType});
           console.log("data fetched");
           res.status(200).json({data});
    }
    catch(err)
    {
         console.log("error");
         res.status(404).json({err:"Data not found"});
    }
})

router.post('/',async(req,res)=>{

    try{
        const data=req.body;
        const MenuItem=new Menu(data);
        const response=await MenuItem.save();
        console.log("data is saved");
        res.status(200).json({response});
    }catch(err)
    {
        res.status(500).json({err:"Internal Server Error"});
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const menuItemId=req.params.id;
        const menuItemData=req.body;

        const response=await Menu.findByIdAndUpdate(menuItemId,menuItemData,{
            new:true,
            runValidators:true,// for validate mongoose validation i.e require true or not 
        })

        if(!response)
        {
            return res.status(404).json("Menu Item Not Found");
        }
        
        res.status(200).json({response});
    }catch(err)
    {
        res.status(500).json({err:"Internal Server Error"});
    }
})

router.delete('/:id', async(req,res)=>{
    try{
          const menuId=req.params.id;
          const response = await Menu.findByIdAndDelete(menuId);
          if(!response)
            {
                return res.status(404).json("Menu Item Not Found");
            }
            res.status(200).json({response});

    }catch(err)
    {
        res.status(500).json({err:"Internal Server Error"});
    }
})

module.exports=router;