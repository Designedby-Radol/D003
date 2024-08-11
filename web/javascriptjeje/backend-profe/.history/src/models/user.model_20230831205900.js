const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    lastName: String,
    password: {type: String, required: true}
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel