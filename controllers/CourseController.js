const courseModel = require('../models/CourseModel')

exports.createCourse = (req, res) => {
    console.log(req.body)
    courseModel.createCourse(req.body).then((result) => {
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

exports.getCourses = (req, res) => {
    courseModel.getCourses().then((result) => {
        res.status(200).send({
            status: "success",
            courses: result
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


exports.getCourseById = (req, res) => {
    console.log(req.query.id)
    courseModel.getCourseById(req.query.id).then((result) => {
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
