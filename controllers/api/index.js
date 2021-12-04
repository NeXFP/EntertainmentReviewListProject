const router = require('express').Router();
const musicRoutes = require('./music-routes');
const telRoutes = require('./television-routes');
const videoGameRoutes = require('./videogames-routes');

router.use('/music', musicRoutes);
router.use('/television', telRoutes);
router.use('/video-games', videoGameRoutes);


module.exports = router;