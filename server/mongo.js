const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodb_url = process.env.MOGODB_URL;
console.log("MONGO DB URL:", { mongodb_url });
mongoose
  .connect(mongodb_url)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"],
    default: "employee",
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
