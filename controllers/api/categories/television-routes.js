const router = require('express').Router();
const { Comment, Post, Login } = require('../../../Models');

//Create a user 
router.post('/user', (req, res) => {
    Login.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Create a post for a tv show
router.post('/post', (req, res) => {
    Post.create({
        title: req.body.title,
        user_id: req.body.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Create comment for a tv show
router.post('/review', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id

    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;