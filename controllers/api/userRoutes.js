const express = require('express');
const router = express.Router();
const { login, logout, register } = require('../controllers/userController');

// POST /user/login
router.post('/login', login);

// POST /user/logout
router.post('/logout', logout);

// POST /user/register
router.post('/register', register);

module.exports = router;
