const { Schema, model, Types } = require("mongoose");

const PostSchema = new Schema(
  {
    key: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    user: {
      type: String,
    },
    message: {
      type: String,
    },
    upVotes: {
      type: Number,
    },
   
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Post = model("Post", PostSchema);
module.exports = Post;
