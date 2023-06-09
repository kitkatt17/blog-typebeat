const api = require("/api");
const router = require('express').Router();
const apiRoutes = require('/api', api);
// const userRoutes = require('./api/userRoutes');
// const commentedRoutes = require('./api/commentedRoutes');
// const postRoutes = require('./api/postRoutes');
const dashboardRoutes = require('./dashboardRoutes.js');
const homeRoutes = require('./homeRoutes.js');


router.use('/api/', apiRoutes);
// router.use('/user', userRoutes);
// router.use('/commented', commentedRoutes);
// router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router