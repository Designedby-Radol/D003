//llamar las librerias
const express = require(`express`)

//rutas importadas
const user = require(`./routes/user`)

//definir las funciones a utilizar
const app = express()

//definir el puerto
const port = 3000

//definir rutas de usuario
app.use(`/user`,user)

//iniciar el servidor
app.listen(port, ( ) => console.log(`server is running in port ${port}`))