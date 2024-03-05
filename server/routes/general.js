// import express from "express";
// import { getUser } from "../controllers/general.js";

// const router = express.Router();

// router.get("/user/:id", getUser);
// export default router;

const express = require("express");
const router = express.Router();
const general = require("../controllers/general.js");

router.get("/user/:id", general.getUser);
module.exports = router;
