const mongoose = require('../utils/moongoseConfig').mongoose;


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bio: String,
    country: String,
    languages: [String],
    userType: Number
})

const userModel = mongoose.model('users', userSchema);

exports.createUser = (userData) => {
    const newUser = new userModel(userData)
    return newUser.save();
}

exports.getAll = () => {
    return userModel.find();
}

exports.getUserById = (id) => {
   // return userModel.findById(id);
   return userModel.find({_id: id})
}

exports.verifyUser = (email, password) => {
    return userModel.find({email: email, password: password})
}