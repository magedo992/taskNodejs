//const course = require('../model/course');

const coures=require('../model/course');
const asyncHandler=require('express-async-handler');
exports.createCourse= asyncHandler(async (req,res)=>{
    const {description,price,title}=req.body;
    
    if(!description||!price ||!title)
    {
        return res.status(400).json({message:"All fields (description, title, price) are required"})
    }
    if (req.body.startDate && !isValidDate(req.body.startDate)) {
        return res.status(400).json({ error: "Invalid startDate format" });
      }
   
    const course=await coures.create(req.body);


    if(course)
    {
return res.status(201).json({message:"course created success"});
    }
    
});

exports.getAll=asyncHandler(async(req,res)=>{
    const course=await coures.find();

    if(course.length===0)
    {
        return res.status(404).json({message:"Courses not found or created yet" });
    }
    console.log(course.length);
    
    res.status(200).json({data:course});
})
exports.getCourse=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    
    
    const coure=await coures.findById(id);
    if(!coure)
    {
        return res.status(404).json({message:"the course not found"});
    }
    return res.status(200).json({data:coure});
})

exports.delete_course = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).json({
      message: "Course deleted successfully",
      data: deletedCourse
    });
  });

exports.updateCourse=asyncHandler(async(req,res)=>{
    const ID=req.params.id;
    const updates = req.body;

    
    if (Object.keys(updates).length === 0) {
        return res.status(400).json({ message: "At least one field (name, description, title, price) must be provided" });
    }
    const updatedCourse = await Course.findByIdAndUpdate(
        ID,
        { $set: req.body },
        { new: true } 
      );
if(!updatedCourse)
{
    return res.status(404).json({message:"the course Not found"});
}
res.status(200).json({ 
    message: "Course updated successfully", 
    data: updatedCourse 
  });
})