const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userController')

router.post('/registe', userControllers.createUser)

module.exports = router;
