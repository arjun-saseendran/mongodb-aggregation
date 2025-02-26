import { Schema, model } from "mongoose";

const userSchema = new Schema({
  index: Number,
  name: String,
  isActive: Boolean,
  registered: String,
  age: Number,
  gender: String,
  eyeColor: String,
  favoriteFruit: String,
  company: {
    title: String,
    email: String,
    phone: String,
  },
  location: {
    country: String,
    address: String,
  },
  tags: { type: [String] },
});

export const User = model("User", userSchema)
