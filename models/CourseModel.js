const mongoose = require('../utils/moongoseConfig').mongoose;

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    hours_expected: Number,
    students_capacity: Number,
    charge_per_hour: Number,
    status: String,
    tutor_id: String,
    images: [String],
    video_link: String,
    time_slot: [Object]    
})

const courseModel = mongoose.model('courses', courseSchema);

exports.createCourse = (courseData) => {
    const newCourse = new courseModel(courseData)
    return newCourse.save();
}

//filter
// 1) Category
// 2) Charges - fromPrice - toPrice 
// 3) Country
/*exports.getCourses = (filterData) => {
    console.log(filterData)
    if(filterData.category != "" && filterData.fromPrice != "" && filterData.toPrice != "" && filterData.country != "") {
        console.log("All")
        courseModel.find({category: filterData.category, charge_per_hour: {$gte: filterData.fromPrice, $lte: filterData.toPrice}}).then((courses) => {
            let response = []
            if(courses.length > 0) {
                for(let i = 0; i < courses.length; i++) {
                    userModel.getUserById(courses[i].tutor_id).then((user) => {
                        if(user.country == filterData.country) {
                            response.push(courses[i])
                        }
                    })
                }
            }
        })
    }else if(filterData.category != "" && filterData.fromPrice != "" && filterData.toPrice != "") {
        console.log("Both")
        return courseModel.find({category: filterData.category, charge_per_hour: {$gte: filterData.fromPrice, $lte: filterData.toPrice}})
    }else if(filterData.fromPrice != "" && filterData.toPrice != "" && filterData.country != "") {

    }else if(filterData.category != "" && filterData.country != "") {

    }else if(filterData.category != "") {
        console.log("Category ONLY")
        return courseModel.find({category: filterData.category})
    }else if(filterData.fromPrice != "" && filterData.toPrice != "") {
        console.log("Charges ONLY")
        return courseModel.find({charge_per_hour: {$gte: filterData.fromPrice, $lte: filterData.toPrice}})
    }else if(filterData.country!="") {
        courseModel.find().then((courses) => {
            let response = []
            if(courses.length > 0) {
                for(let i = 0; i < courses.length; i++) {
                    userModel.getUserById(courses[i].tutor_id).then((user) => {
                        if(user.country == filterData.country) {
                            response.push(courses[i])
                        }
                    })
                }
            }
        })
    }
    
    else {
        return courseModel.find();
    }
}
*/


exports.getCourses = (filterData) => {
    console.log(filterData)
    if(filterData.category != "" && filterData.fromPrice != "" && filterData.toPrice != "") {
        return courseModel.find({category: filterData.category, charge_per_hour: {$gte: filterData.fromPrice, $lte: filterData.toPrice}})
    }else if(filterData.category != "") {
        return courseModel.find({category: filterData.category})
    }else if(filterData.fromPrice != "" && filterData.toPrice != "") {
        return courseModel.find({charge_per_hour: {$gte: filterData.fromPrice, $lte: filterData.toPrice}})
    }else {
        return courseModel.find();
    }
}

exports.getCourseById = (id) => {
    return courseModel.find({_id: id})
}

exports.getCourseByTutorId = (tutorId) => {
    return courseModel.find({tutor_id: tutorId})
}
 
exports.updateCourse = (courseData) =>  {
    return courseModel.findOneAndUpdate({_id: courseData._id}, courseData,{new: true})
}

exports.deleteCourse = (id) => {
    return courseModel.findOneAndDelete({_id: id});
}