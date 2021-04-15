const userModel = require('../models/UserModel')

exports.testAPI = (req, res) => {
    res.send("Hello Sri");
    return;
}

exports.createUser = (req, res) => {
    console.log(req.body)
    userModel.createUser(req.body).then((result) => {
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

exports.getUsers = (req, res) => {
    userModel.getAll().then((result) => {
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

exports.getUserById = (req, res) => {
    console.log(req.query.id)
    userModel.getUserById(req.query.id).then((result) => {
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

exports.verifyUser = (req, res) => {
    userModel.verifyUser(req.body.email, req.body.password).then((result) => {
        console.log(result[0])
        if(result && result.length > 0 && result[0].email) {
            res.status(200).send({
                status: "success",
                user: result[0]
            })
        }else{
            res.status(200).send({
                status: "failed",
                user: {}
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
}



// exports.testAPI = this.testAPI