const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

//GET all posts
router.get('/', (req, res) => {
    console.log('---------------------');
    Post.findAll(
    //   {
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
    //             attributes: ['id', 'comment_text', 'post_id'],
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
    )
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET single post by id
router.get('/:id', (req, res) => {
    Post.findOne(
      {
      where: {
        id: req.params.id
      },
      // attributes: ['id', 
      //              'post_text', 
      //              'title'
      //           ],
      // include: [
      //   {
      //     model: User,
      //     attributes: ['username']
      //   },
      //   {
      //     model: Comment,
      //     attributes: ['id', 'comment_text', 'post_id'],
      //     include: {
      //       model: User,
      //       attributes: ['username']
      //     }
      //   }
      // ]
    }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//CREATE new post
router.post('/',  (req, res) => {
    Post.create({ 
        title: req.body.title,
        post_text: req.body.post_text,
        
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err); 
        });
});

//UPDATE a post
router.put('/:id', (req, res) => {
    Post.update({
        title: req.body.title,
        post_text: req.body.post_text
      },
      {
        where: {
          id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;