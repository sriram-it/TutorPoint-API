var userController = require('../controllers/UserController')

exports.routeConfig = function(app){
    app.get('/test', userController.testAPI);

    app.post('/tutorPoint/api/createUser', userController.createUser)
    app.get('/tutorPoint/api/getUsers', userController.getUsers)
    app.get('/tutorPoint/api/getUser', userController.getUserById)
    app.post('/tutorPoint/api/login', userController.verifyUser)
    app.post('/tutorPoint/api/updateUser', userController.updateUser)
}


