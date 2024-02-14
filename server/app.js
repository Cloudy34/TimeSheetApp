const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const { Collection } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// This should already be declared in your API file
// ADD THIS
app.get("/", cors(), (req, res) => {});
const port = process.env.PORT;

app.post("/", async (req, res) => {
  const {  username,  password } = req.body;

  try {
    const user = await collection.findOne({ username: username });

    if (!user) {
      // Email does not exist
      res.json("notexist");
    } else {
      // Email exists, check password
      if (user.password === password) {
        res.json({ status: "success", user: user });
      } else {
        // Incorrect password
        res.json("incorrectpassword");
      }
    }
  } catch (e) {
    console.error("Error logging in:", e);
    res.json("error");
  }
});

app.post("/signup", async (req, res) => {
  const { fullname, phone, username, email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      // User already exists
      res.json("exist");
    } else {
      // User does not exist, insert new user
      const newUser = await collection.create({
        username: username,
        fullname: fullname,
        phone: phone,
        email: email,
        password: password,
      });
      res.json("notexist");
    }
  } catch (e) {
    console.error("Error signing up:", e);
    res.json("error");
  }
});

app.get("/admin/dashboard", async (req, res) => {
  try {
    // Check if user is authorized
    const userRole = req.user.role;
    if (userRole !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // If authorized, return the admin dashboard message
    res.json({ role: user.role });
  } catch (error) {
    // Error occurred
    console.error("Error accessing admin dashboard:", error);
    res.status(500).json({
      message: "An error occurred while accessing the admin dashboard",
    });
  }
});

app.get("/manager/dashboard", async (req, res) => {
  try {
    // Check if user is authorized
    const userRole = req.user.role;
    if (userRole !== "manager" && userRole !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    // If authorized, return the manager dashboard message
    res.json({ message: "Welcome to the manager dashboard" });
  } catch (error) {
    // Error occurred
    console.error("Error accessing manager dashboard:", error);
    res.status(500).json({
      message: "An error occurred while accessing the manager dashboard",
    });
  }
});
app.get("/employee/dashboard", async (req, res) => {
  try {
    // Return the employee dashboard message
    res.json({ message: "Welcome to the employee dashboard" });
  } catch (error) {
    // Error occurred
    console.error("Error accessing employee dashboard:", error);
    res.status(500).json({
      message: "An error occurred while accessing the employee dashboard",
    });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
