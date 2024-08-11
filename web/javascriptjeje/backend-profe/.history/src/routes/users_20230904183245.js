const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userController')

router.post('/register', userControllers.createUser)
router.get('/getAll', userControllers.getAllUsers)
router.put('/update', userControllers.updateUser)

module.exports = router;
