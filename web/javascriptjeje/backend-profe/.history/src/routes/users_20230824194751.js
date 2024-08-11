const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userController')

router.get('/login', userControllers.login)

module.exports = router;
