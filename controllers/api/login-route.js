const router = require('express').Router();
const { Login } = require('../../Models')

router.get('/', (req, res) => {
    Login.findAll()
    .then(dbLoginData => res.json(dbLoginData))
    .catch((err) => {
        console.log(err);

        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Login.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(dbLoginData => res.json(dbLoginData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;