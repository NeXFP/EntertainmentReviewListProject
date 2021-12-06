const router = require('express').Router();

const loginRoutes = require('./login-route');
const musicRoutes = require('./categories/music-routes');
const telRoutes = require('./categories/television-routes');
const videoGameRoutes = require('./categories/videogames-routes');
const postRoutes = require('./post-routes')

router.use('/music', musicRoutes);
router.use('/television', telRoutes);
router.use('/video-games', videoGameRoutes);
router.use('/post-routes')

router.use('/login', loginRoutes);

module.exports = router;