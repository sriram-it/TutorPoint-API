const courseModel = require('../models/CourseModel')
const userModel = require('../models/UserModel')

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

/*exports.getCourses = (req, res) => {
    courseModel.getCourses(req.body).then((courses) => {
        let response = []
        if(courses.length > 0 && req.body.country != "") { 
            console.log("Inner")
            for(let i = 0; i < courses.length; i++) {
                console.log(courses[i].tutor_id)
                userModel.filterUserByIdAndCountry(courses[i].tutor_id, req.body.country).then((user) => {
                    console.log("USERRR")
                    response.push(courses[i])
                })
            }
        }
        console.log("responseee")
        console.log(response)
        if(response.length > 0) {
            res.status(200).send({
                status: "success",
                courses: response
            })
        } else {
            res.status(200).send({
                status: "success",
                courses: courses
            })
        }

    }).catch((error) => {
        console.log(error)
        res.status(200).send({
            status: "failed",
            errors: "Internal Server Error"
        })    
    })
    return;
}*/


exports.getCourses = (req, res) => {
    courseModel.getCourses(req.body).then((result) => {
        console.log(result)
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


exports.getCourseByTutorId = (req, res) => {
    console.log(req.query.tutorId)
    courseModel.getCourseByTutorId(req.query.tutorId).then((result) => {
        console.log(result)
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


exports.updateCourse = (req, res) => {
    console.log(req.body)
    courseModel.updateCourse(req.body).then((result) => {
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


exports.deleteCourse = (req, res) => {
    console.log(req.query.id)
    courseModel.deleteCourse(req.query.id).then((result) => {
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


//filter
// 1) Category
// 2) Charges
// 3) Country
