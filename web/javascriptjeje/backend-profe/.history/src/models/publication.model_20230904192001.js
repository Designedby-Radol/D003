const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    username: String,
    email: String,
    name: String,
    lastname: String,
    password: {type: String, required: true},
    followers: {type: Array, default: []},
    follows: {type: Array, default: []}
})

const PublicationModel = mongoose.model('publication', publicationSchema)

module.exports = PublicationModel