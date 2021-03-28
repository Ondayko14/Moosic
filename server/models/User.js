const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
  {
    key: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
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

const User = model("User", UserSchema);
module.exports = User;
