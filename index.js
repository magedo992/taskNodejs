const express =require('express');

const app=express();
const DBconfig=require('./dbconfig/dbconfig');
require('dotenv').config()
const port=process.env.port;
const courseRoute=require('./route/courseRoute');
const bodyParser = require('body-parser');
const cors=require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api',courseRoute);



app.get('/',(req,res)=>{
    res.status(200).json({"message":"hello world"});
})
DBconfig()
app.listen(port,()=>{
    

console.log(`server runing on port ${port}`)
})