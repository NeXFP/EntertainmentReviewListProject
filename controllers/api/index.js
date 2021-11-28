const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const loginRoute = require('./login-route');
const dataRoutes = require('./data-routes');

router.use('/categories', categoryRoutes);
router.use('/login', loginRoute);
router.use('/data', dataRoutes);

module.exports = router;