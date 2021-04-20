const enrollmentModel = require('../models/EnrollmentModel')

exports.createEnrollment = (req, res) => {
    console.log(req.body)
    enrollmentModel.createEnrollment(req.body).then((result) => {
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}

exports.getEnrollments = (req, res) => {
    enrollmentModel.getAll().then((result) => {
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}

exports.getEnrollmentById = (req, res) => {
    console.log(req.query.id)
    enrollmentModel.getEnrollmentById(req.query.id).then((result) => {
        console.log(result)
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}

exports.getEnrollmentByStudent = (req, res) => {
    console.log(req.query.studentId)
    enrollmentModel.getEnrollmentByStudent(req.query.studentId).then((result) => {
        console.log(result)
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}


exports.getEnrollmentByTutor = (req, res) => {
    console.log(req.query.tutorId)
    enrollmentModel.getEnrollmentByTutor(req.query.tutorId).then((result) => {
        console.log(result)
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}

exports.getEnrollmentByCourse = (req, res) => {
    console.log(req.query.courseId)
    enrollmentModel.getEnrollmentByCourse(req.query.courseId).then((result) => {
        console.log(result)
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}

exports.updateEnrollment = (req, res) => {
    console.log(req.body)
    enrollmentModel.updateEnrollment(req.body).then((result) => {
        res.status(200).send({
            status: "success",
            user: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}

exports.deleteEnrollment = (req, res) => {
    console.log(req.query.id)
    enrollmentModel.deleteEnrollment(req.query.id).then((result) => {
        res.status(200).send({
            status: "success",
            course: result
        })
    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}


// exports.testAPI = this.testAPI