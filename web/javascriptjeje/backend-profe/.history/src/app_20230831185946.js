// llamar la librerias
const express = require('express')

//rutas importadas
const users = require('./routes/users')
const products = require('./routes/products')

// definir los funciones a utilizar
const app = express()

//debe entender formato json
app.use(json())

// conexion a la BD
require('./db')

// definir el puerto
const port = 3001

// importamos rutas de usuario
app.use('/users', users)
app.use('/products', products)


// iniciar el servidor
app.listen(port, () => console.log(`Server is running in port ${port}`))