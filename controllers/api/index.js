const router = require('express').Router();

const loginRoutes = require('./login-route');

router.use('/login', loginRoutes);

module.exports = router;