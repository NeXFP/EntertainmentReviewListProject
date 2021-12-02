const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('registration');
})

router.get('/main', (req, res) => {
    res.render('post');
});

module.exports = router;