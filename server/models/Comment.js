const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
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
    }
})

const Comment = model('Comment',CommentSchema);
module.exports = Comment;