// controllers/signupController.js

const User = require("../models/User");

exports.signup = async (req, res) => {
  const { fullname, phone, username, email, password } = req.body;
  console.log("-----------------------------------", fullname);

  try {
    const user = await User.findOne({ email, username, fullname });

    if (user) {
      res.json("exist");
    } else {
      const newUser = await User.create({
        username,
        fullname,
        phone,
        email,
        password,
      });
      res.json({status: "success", message:"New User Successfully Created"});
    }
  } catch (error) {
    console.error("Error signing up:", error);
    res.json("error");
  }
};
