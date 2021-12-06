const router = require('express').Router();
const { Login } = require('../../models')

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

router.post('/login', (req, res) => {
    Login.findOne({
        where: {
            email: req.body.email,
        },
    })
        .then((dbLoginData) => {
            if (!dbLoginData) {
                res.status(400).json({ message: "No user exists with this email address" });
                return;
            }

            const validPassword = dbLoginData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: "Incorrect password entered" });
                return;
            }

            req.session.save(() => {
                req.session.user_id = dbLoginData.id;
                req.session.loggedIn = true;

                res.json({ user: dbLoginData, message: "You are now logged in!" });
            });
        })
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})

module.exports = router;