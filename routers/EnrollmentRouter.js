var enrollmentController = require('../controllers/EnrollmentController')

exports.routeConfig = function(app){
    app.post('/tutorPoint/api/createEnrollment', enrollmentController.createEnrollment)
    app.get('/tutorPoint/api/getEnrollments', enrollmentController.getEnrollments)
    app.get('/tutorPoint/api/getEnrollment', enrollmentController.getEnrollmentById)
    app.get('/tutorPoint/api/getEnrollmentByStudent', enrollmentController.getEnrollmentByStudent)
    app.get('/tutorPoint/api/getEnrollmentByTutor', enrollmentController.getEnrollmentByTutor)
    app.get('/tutorPoint/api/getEnrollmentByCourse', enrollmentController.getEnrollmentByCourse)
    app.post('/tutorPoint/api/updateEnrollment', enrollmentController.updateEnrollment)
    app.get('/tutorPoint/api/deleteEnrollment', enrollmentController.deleteEnrollment)
}

