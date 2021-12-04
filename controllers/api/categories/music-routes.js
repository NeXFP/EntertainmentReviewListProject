const router = require('express').Router();
const { Comment } = require('../../../Models');

//Create comment for music
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;