const { AuthenticationError } = require("apollo-server-express");
const { User, Comment, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
   
    post: async (parent, { _id }) => {
      return await Post.findById(_id).populate("post");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "show.posts",
          populate: "post",
        });
        return user;
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { post }, comment) => {
      console.log(post);
      if (context.user) {
        const post = new Post({ user });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { post: post },
        });

        return post;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};
module.exports = resolvers;
