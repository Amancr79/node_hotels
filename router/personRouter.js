const express=require('express');
const router=express.Router();
const Person=require('../models/person');
const bodyParser=require('body-parser');
router.use(bodyParser.json());


router.get('/', async(req,res)=>{
    try{
           const data=await Person.find();
           console.log("data fetched");
           res.status(200).json({data});
}catch(e)
{
   res.status(500).json({e:"Internal server error"});
}
})

router.get('/:workType', async(req,res)=>{
    
    try{
        const workType = req.params.workType;
        if(workType =='chef' || workType == 'waiter' || workType=='customer')
        {
         const response=await Person.find({work:workType});
         console.log("data fetched 2");
         res.status(200).json({response});
       }
       else
       {
        console.log("Invalid Type");
        res.status(404).json({error:"Invalid Type Error"});
       }
}catch(error){
   console.log(error);
   res.status(500).json({error:"Internal server error"});
}
})


router.post('/', async(req,res)=>{
   
    try{
         const data=req.body;
         console.log("data saved");
         const newPerson=new Person(data);   
         const response=await newPerson.save();
         res.status(200).json({response});
    }catch(error){ 
       console.log(error); 
       res.status(500).json({error : "Internal server error."});
    }   
})  

router.put('/:id',async(req,res)=>{
    try{

        const personId=req.params.id;
        const updatePersonData=req.body;
        console.log({personId});
        const response=await Person.findByIdAndUpdate(personId,updatePersonData , {
            new:true, //return updated document
            runValidators:true //use for mongoose validations
        })

        if(!response)
        {
            return res.status(404).json("No data Found"); 
        }
        console.log("data updated..");
        res.status(200).json({response});
    }catch(err)
    {
        res.status(500).json({err:"Interval server error."})
    }
})


router.delete('/:id', async(req,res)=>{

    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);

        if(!response)
        {
            return res.status(404).json("Data Not Found");
        }
        console.log("data deleted");
        res.status(200).json({response});
    }catch(err)
    {
        res.status(500).json({err:"Interval server error."})
    }
})

module.exports=router;