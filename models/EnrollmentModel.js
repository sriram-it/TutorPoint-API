const mongoose = require('../utils/moongoseConfig').mongoose;


const enrollmentSchema = new mongoose.Schema({
    course_id: String,
    student_id: String,
    tutor_id: String,
    hours_completed: Number,
    status: String,
    student_rating: Number,
    student_comment: String
})

const enrollmentModel = mongoose.model('enrollments', enrollmentSchema);

exports.createEnrollment = (enrollmentData) => {
    const newEnrollment = new enrollmentModel(enrollmentData)
    return newEnrollment.save();
}

exports.getAll = () => {
    return enrollmentModel.find();
}

exports.getEnrollmentById = (id) => {
   // return userModel.findById(id);
   return enrollmentModel.find({_id: id})
}

exports.getEnrollmentByStudent = (studentId) => {
    return enrollmentModel.find({student_id: studentId})
}

exports.getEnrollmentByTutor = (tutorId) => {
    return enrollmentModel.find({tutor_id: tutorId})
}

exports.getEnrollmentByCourse = (courseId) => {
    return enrollmentModel.find({course_id: courseId})
}

exports.updateEnrollment = (enrollmentData) =>  {
    return enrollmentModel.findOneAndUpdate({_id: enrollmentData._id}, enrollmentData,{new: true})
}

exports.deleteEnrollment = (id) => {
    return enrollmentModel.findOneAndDelete({_id: id});
}