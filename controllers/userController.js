import { User } from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const {
      index,
      name,
      age,
      gender,
      registered,
      isActive,
      eyeColor,
      favoriteFruit,
      company: { title, email, phone } = {},
      location: { country, address } = {},
      tags = [],
    } = req.body;

    // Create new user
    const newUser = new User({
      index,
      name,
      isActive,
      registered,
      age,
      gender,
      eyeColor,
      favoriteFruit,
      company: {
        title,
        email,
        phone,
      },
      location: {
        country,
        address,
      },
      tags,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

export const getUsers = async(req, res) => {
  const users = await User.find();
  res.status(200).json({message: 'User data fetched successfully!', users})
}
