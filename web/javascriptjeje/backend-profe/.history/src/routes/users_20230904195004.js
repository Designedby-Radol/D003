const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userController')

router.post('/register', userControllers.createUser)
router.get('/getAll', userControllers.getAllUsers)
router.get('/getByUsername/:username', userControllers.getByUsername)
router.put('/update/:_id', userControllers.updateUser)
router.delete('/delete/:_id', userControllers.deleteUser)

//followers

// quienes puedo seguir - a quien puedo añadir de amigo

// añadir seguidor - añadir amigo
router.post('/addFollower', userControllers.addFollower)

// a quienes estoy siguiendo -  que amigos tengo

// saber que seguidores tengo - que amigos tengo

// dejar de seguir - eliminar amigo




module.exports = router;
