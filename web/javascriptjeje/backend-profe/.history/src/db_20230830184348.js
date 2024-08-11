const mongoose = require('mongoose')

const uri = "mongodb+srv://striker:bBYtMmwjLLI1FnfQ@cluster0.9qij9.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("DB is conect"))
    .catch((error) => console.log(error))

module.exports = mongoose