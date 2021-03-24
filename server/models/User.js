const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    key: {
        type: String
    },
    userName:  {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    posts: []
})

const User = model('User',UserSchema);
module.exports = User;