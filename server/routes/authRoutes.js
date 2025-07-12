const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup); // Signup API
router.post('/login', login);   // Login API

module.exports = router;
