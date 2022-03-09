const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors())
const connect=require('./db/connection');
const User=require('./routes/User')
connect();
app.use('/api',User);
app.listen(3000,()=>{
    console.log('Port connected to 3000');
})