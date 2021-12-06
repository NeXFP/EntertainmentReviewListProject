const Login = require('./login');
const Post = require('./Post');
const Comment = require('./Comment');

// user can make many posts 
Login.hasMany(Post, {
    foreignKey: 'user_id'
});

// post can only belong to one user 
Post.belongsTo(Login, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Login, {
    foreignKey: 'user_id'
});
module.exports = { Post, Comment, Login }
