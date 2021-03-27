const { Schema, model, Types } = require("mongoose");

const CommentSchema = new Schema(
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
// Export
const Comment = model("Comment", CommentSchema);
module.exports = Comment;
