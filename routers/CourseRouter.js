var courseController = require('../controllers/CourseController')

exports.routeConfig = function(app){
    app.post('/tutorPoint/api/createCourse', courseController.createCourse)
    app.get('/tutorPoint/api/getCourses', courseController.getCourses)
    app.get('/tutorPoint/api/getCourse', courseController.getCourseById)
}

