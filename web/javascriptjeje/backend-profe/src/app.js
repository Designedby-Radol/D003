// llamar la librerias
const express = require('express')

//rutas importadas
const users = require('./routes/users')

// definir los funciones a utilizar
const app = express()

//debe entender formato json
app.use(express.json())

// conexion a la BD
require('./db')

// definir el puerto
const port = 3001

// importamos rutas de usuario
app.use('/users', users)


// iniciar el servidor
app.listen(port, () => console.log(`Server is running in port ${port}`))