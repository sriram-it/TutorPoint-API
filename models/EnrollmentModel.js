const mongoose = require('../utils/moongoseConfig').mongoose;


const enrollmentSchema = new mongoose.Schema({
    course_id: {type: mongoose.Schema.Types.ObjectId, ref: 'courses'},
    student_id: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    tutor_id: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
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
    return enrollmentModel.find().populate('course_id').populate('student_id').populate('tutor_id');
}

exports.getEnrollmentById = (id) => {
   return enrollmentModel.find({_id: id}).populate('course_id').populate('student_id').populate('tutor_id');
}

exports.getEnrollmentByStudent = (studentId) => {
    return enrollmentModel.find({student_id: studentId}).populate('course_id').populate('student_id').populate('tutor_id');
}

exports.getEnrollmentByTutor = (tutorId) => {
    return enrollmentModel.find({tutor_id: tutorId}).populate('course_id').populate('student_id').populate('tutor_id');
}

exports.getEnrollmentByCourse = (courseId) => {
    return enrollmentModel.find({course_id: courseId}).populate('course_id').populate('student_id').populate('tutor_id');
}

exports.updateEnrollment = (enrollmentData) =>  {
    return enrollmentModel.findOneAndUpdate({_id: enrollmentData._id}, enrollmentData,{new: true})
}

exports.deleteEnrollment = (id) => {
    return enrollmentModel.findOneAndDelete({_id: id});
}