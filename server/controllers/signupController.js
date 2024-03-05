// controllers/signupController.js

const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { fullname, phone, username, email, password } = req.body;

  try {
    // Check if the user already exists
    let existingUser = await User.findOne({
      $or: [{ email }, { username }, { fullname }],
    });

    if (existingUser) {
      return res.json({ status: "error", message: "User already exists" });
    }

    // If the user doesn't exist, hash the password and create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      phone,
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.json({ status: "success", message: "New user successfully created" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.json({
      status: "error",
      message: "An error occurred while signing up",
    });
  }
};
