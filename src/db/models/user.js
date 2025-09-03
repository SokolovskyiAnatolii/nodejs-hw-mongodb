import { model, Schema } from 'mongoose';
import { EMAIL_REGEXP } from '../../constants/index.js';

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      match: EMAIL_REGEXP,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

usersSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('user', usersSchema);
