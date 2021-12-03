const router = require('express').Router();
const { withAuth, withoutAuth} = require('../utils/auth');

router.get('/login', withoutAuth, (req, res) => {
    res.render('login');
})

router.get('/signup', withoutAuth,  (req, res) => {
    res.render('registration');
})

router.get('/', (req, res) => {
    res.render('post');
});

module.exports = router;