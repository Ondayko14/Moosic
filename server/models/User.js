const { Schema, model, Types } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    key: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5
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

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;