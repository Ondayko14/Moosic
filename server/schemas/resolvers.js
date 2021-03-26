const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Post} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers= { 
    Query: {
        posts: async () => {
            return await Post.find();
        },

        comments: async (parent, {post, user}) => {
            
        }
    
    
    
    
    
    
    








    }
};

module.exports = resolvers;










