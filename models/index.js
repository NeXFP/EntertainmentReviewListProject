const Login = require('./Login');
const User = require('./User')
const Post = require('./Post');
const Comment = require('./Comment');

// user can make many posts 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post can only belong to one user 
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
module.exports = { User, Post, Comment, Login}
