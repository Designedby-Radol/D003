const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userController')

router.post('/register', userControllers.createUser)
router.get('/getAll', userControllers.getAllUsers)
router.get('/getByUsername/:username', userControllers.getByUsername)
router.put('/update/:_id', userControllers.updateUser)
router.delete('/delete/:_id', userControllers.deleteUser)

//followers


module.exports = router;
