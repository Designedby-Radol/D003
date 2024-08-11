const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    user_id: String,
    description: String,
    source: String, //Imagen,
    reactions: {type: Array, default: []},
    comments: {type: Array, default: []}, //{user_id: "quien comentó" , comment: "ud esta ñindo"}
    type: {
        shared: Boolean, // true - false
        user_id_owner: String // id owner o simplemente nulo
    } // shared - owner
})

const PublicationModel = mongoose.model('publication', publicationSchema)

module.exports = PublicationModel