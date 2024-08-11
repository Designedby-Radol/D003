const mongoose = require('mongoose')

const uri = ""

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log("Conectado a la BD"))
    .catch((error) => console.log(error))