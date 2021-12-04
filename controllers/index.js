const router = require('express').Router();
const apiRoutes  = require('./api');
const loginRoute  = require('./login-route');

router.use('/api', apiRoutes);
router.use('/login', loginRoute);

router.use("*",(req, res) => {
    res.send("<h1>You're going the wrong way! </h1>")
});

module.exports = router;