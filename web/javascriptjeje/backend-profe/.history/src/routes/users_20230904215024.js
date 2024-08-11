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
router.get("/possibleFollows/:_id", userControllers.getPossibleFollows)

// añadir seguidor - añadir amigo
router.post('/addFollower', userControllers.addFollower)

// saber que seguidores tengo - que amigos tengo
router.get('/getFollowers/:username', userControllers.getFollowersByUsername)

// dejar de seguir - eliminar amigo
router.post("/unfollow", userControllers.deleteFollower)




module.exports = router;
