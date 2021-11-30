const router = require('express').Router();
const musicRoutes = require('./categories/music-routes');
const loginRoute = require('./login-route');
const telRoutes = require('./categories/television-routes');
const videoGameRoutes = require('./categories/videogames-routes');

router.use('/music', musicRoutes);
router.use('/login', loginRoute);
router.use('/television', telRoutes);
router.use('/video-games', videoGameRoutes);


module.exports = router;