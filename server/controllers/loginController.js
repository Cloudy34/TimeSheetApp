const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User does not exist", data: null });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ status: "error", message: "Incorrect password", data: null });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    // Send token along with other data in the response body
    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res
      .status(500)
      .json({ status: "error", message: "An error occurred", data: null });
  }
};

