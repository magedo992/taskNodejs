const express =require('express');

const app=express();
const DBconfig=require('./dbconfig/dbconfig');
require('dotenv').config()
const port=process.env.port;
const courseRoute=require('./route/courseRoute');
app.use(express.json())

app.use('/api',courseRoute);





app.listen(port,()=>{
    DBconfig()

console.log(`server runing on port ${port}`)
})