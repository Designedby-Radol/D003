const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    user_id: String,
    description: String,
    source: String, //Imagen,
    reactions: {type: Array, default: []},
    type: {
        shared: Boolean,
        user_id_owner: String
    } // shared - owner
})

const PublicationModel = mongoose.model('publication', publicationSchema)

module.exports = PublicationModel