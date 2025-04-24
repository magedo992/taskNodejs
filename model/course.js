const mongoose =require('mongoose');

const CourseSchema=new mongoose.Schema({
    title: { type: String, required: true },
    description:{
        type:String,
        requried:true
    },
    image:String,
    startDate:Date,
    endDate:Date,
    price:{type:Number,requried:true}
},{timestamps:true})


module.exports=mongoose.model('course',CourseSchema);