const express=require('express');
const router=express.Router();
const {delete_course,updateCourse,getAll,getCourse,createCourse}=require('../controller/courseController');

router.route('/courses').get(getAll).post(createCourse);
router.route('/courses/:id').get(getCourse)
.put(updateCourse)
.delete(delete_course);

module.exports=router;