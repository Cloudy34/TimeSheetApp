// controllers/loginController.js

const User = require("../models/User");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log("-----------------------------------", user);

    if (!user) {
      res.json({ status: "error", message: "User does not exist", data: null });
    } else {
      if (user.password === password) {
        res.json({
          status: "success",
          message: "Login successful",
          data: user,
        });
      } else {
        res.json({
          status: "error",
          message: "Incorrect password",
          data: null,
        });
      }
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.json({ status: "error", message: "An error occurred", data: null });
  }
};
