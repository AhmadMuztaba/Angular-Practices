const User = require('../model/User');

const router=require('express').Router();
router.post('/signup',async(req,res)=>{
    try{

        const {username,password}=req.body;
        // console.log(req.body);
        const user=new User({username:username,password:password});
        await user.save();
        console.log('created');
        res.status(200).json('created');
    }catch(err){
        console.log(err.message);
        res.status(400).send({err:err.message});
    }
});

router.post('/isUserNameExist',async(req,res)=>{
    try{
        const {username}=req.body;
        const user=await User.findOne({username:username});
        if(user){
            throw new Error('username exist');
        }
        res.status(200).send({usernameExist:false});
    }catch(err){
        res.status(400).send({usernameExist:true});
    }
})

router.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username,password});
        if(!user){
            throw new Error('login failed');
        }
        res.status(200).send(user)
    }catch(err){
        res.status(400).send({err:err.message})
    }
})
module.exports=router;