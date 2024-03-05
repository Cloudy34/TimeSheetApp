// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const general = require("../controllers/general.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// import { getUser } from "../controllers/general.js";

router.post("/login", loginController.login);
router.post("/signup", signupController.signup);
// router.get("/api", general.getUser);

router.get("/user/:id", general.getUser);

module.exports = router;
