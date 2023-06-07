// 
const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./api/userRoutes');
const commentedRoutes = require('./api/commentedRoutes');
const postRoutes = require('./api/postRoutes');
const dashboardRoutes = require('./controllers/dashboardRoutes');
const homeRoutes = require('./controllers/homeRoutes');


router.use('./api', apiRoutes);
router.use('./api/user', userRoutes);
router.use('./api/commented', commentedRoutes);
router.use('./api/post', postRoutes);
router.use('./controllers/dashboard', dashboardRoutes);
router.use('./controllers/home', homeRoutes);

module.exports = router