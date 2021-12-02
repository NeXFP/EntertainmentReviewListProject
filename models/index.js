const User = require('./User')
const Post = require('./Post');
const Music = require('./Music');
const Television = require('./Television');
const VideoGames = require('./VideoGames');

// user can make many posts 
User.hasMany(Post, {
    foreignKey: 'user_id'
}); 

// post can only belong to one user 
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.belongsToMany(Post, {
    foreignKey: 'user_id'
});


Music.belongsTo(User, {
    foreignKey: 'user_id'
});

Music.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Music, {
    foreignKey: 'user_id'
});

Post.hasMany(Music, {
    foreignKey: 'post_id'
});


Television.belongsTo(User, {
    foreignKey: 'user_id'
});

Television.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Television, {
    foreignKey: 'user_id'
});

Post.hasMany(Television, {
    foreignKey: 'post_id'
});

VideoGames.belongsTo(User, {
    foreignKey: 'user_id'
});

VideoGames.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(VideoGames, {
    foreignKey: 'user_id'
});

Post.hasMany(VideoGames, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Music, Television, VideoGames}