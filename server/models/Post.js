const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    key: {
        type: String
    },
    user:  {
        type: String
    },
    message: {
        type: String
    },
    upVotes: {
        type: Number
    },
    comments: []
})

const Post = model('Post',PostSchema);
module.exports = Post;