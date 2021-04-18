var courseController = require('../controllers/CourseController')

exports.routeConfig = function(app){
    app.post('/tutorPoint/api/createCourse', courseController.createCourse)
    app.get('/tutorPoint/api/getCourses', courseController.getCourses)
    app.get('/tutorPoint/api/getCourse', courseController.getCourseById)
    app.get('/tutorPoint/api/getCourseByTutor', courseController.getCourseByTutorId)
    app.post('/tutorPoint/api/updateCourse', courseController.updateCourse)
    app.get('/tutorPoint/api/deleteCourse', courseController.deleteCourse)
}

