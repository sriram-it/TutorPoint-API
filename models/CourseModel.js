const mongoose = require('../utils/moongoseConfig').mongoose;


const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    hours_expected: Number,
    students_capacity: Number,
    charge_per_hour: Number,
    status: String,
    tutor_id: String,
    time_slot: [Object]    
})

const courseModel = mongoose.model('courses', courseSchema);

exports.createCourse = (courseData) => {
    const newCourse = new courseModel(courseData)
    return newCourse.save();
}

exports.getCourses = () => {
    return courseModel.find();
}

exports.getCourseById = (id) => {
    return courseModel.find({_id: id})
 }
 