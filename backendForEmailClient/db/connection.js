
const mongoose=require('mongoose');
const connect=async()=>{
    try{
        const response=await mongoose.connect('');
        if(response){
            console.log('connected');
        }
    }catch(err){
        console.log('error detected',err.message);
    }
}
module.exports=connect;