const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    lastname: String,
    password: {type: String, required: true},
    followers: {type: Array, default: []}
    follows: {type: Array, default: []}
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel