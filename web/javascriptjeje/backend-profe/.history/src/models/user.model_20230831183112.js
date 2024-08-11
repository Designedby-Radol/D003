const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    lastname: String,
    password: {type: String, required: true}
})

const User = mongoose.model('user', userSchema)