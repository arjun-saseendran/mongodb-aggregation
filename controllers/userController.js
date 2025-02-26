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

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

// Get all users.
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "User data fetched successfully!", users });
};

// Get active users.
export const getActiveUsers = async (req, res) => {
  const activeUsers = await User.aggregate([{ $match: { isActive: true } }]);
  res
    .status(200)
    .json({ message: "Active users fetched successfully!", activeUsers });
};

// Get active users count.
export const getActiveUsersCount = async (req, res) => {
  const activeUsersCount = await User.aggregate([
    {
      $match: { isActive: true },
    },
    {
      $count: "Active Users",
    },
  ]);
  res
    .status(200)
    .json({ message: "Active users count fetched!", activeUsersCount });
};

//Get inactive users.
export const getInactiveUser = async (req, res) => {
  const inactiveUsers = await User.aggregate([{ $match: { isActive: false } }]);
  res
    .status(200)
    .json({ message: "Inactive users fetched successfully!", inactiveUsers });
};

// Get inactvie users count.
export const getInactiveUsersCount = async (req, res) => {
  const inactiveUsersCount = await User.aggregate([
    { $match: { isActive: false } },
    { $count: "Inactive users count!" },
  ]);
  res
    .status(200)
    .json({ message: "Inactive users count feteched!", inactiveUsersCount });
};

// Get the average of user age by gender
export const getUserAgeAvgByGender = async (req, res) => {
  const averageAgeByGender = await User.aggregate([
    {
      $group: {
        _id: "$gender",
        averageAge: {
          $avg: "$age",
        },
      },
    },
  ]);

  res
    .status(200)
    .json({ message: "Average age by gender fetched!", averageAgeByGender });
};
