const router = require('express').Router();
const { withAuth, withoutAuth} = require('../utils/auth');
const { Post, Comment, User } = require('../models');

router.get('/login', withoutAuth, (req, res) => {
    res.render('login');
})

router.get('/signup', withoutAuth,  (req, res) => {
    res.render('registration');
})

router.get('/', (req, res) => {
    Post.findAll(
    //     {
    //     attributes: ['id', 
    //                  'post_text',
    //                  'title',
    //                  'created_at'
    //             ],
    //     //shows the latest news first
    //     order: [['created_at', 'DESC']],
    //     //JOIN to the User table
    //     include: [
    //         //attaches username to comment
    //         {
    //             model: Comment,
    //             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //             include: {
    //               model: User,
    //               attributes: ['username']
    //         }
    //     },
    //     {
    //         model: User,
    //         attributes: ['username']
    //     },
    //  ]

    // }
    ) .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}))
        res.render("post", {posts})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;