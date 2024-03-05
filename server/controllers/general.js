// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.getUser = async (req, res) => {
//   console.log("hdhdhdh", req.headers);
//   try {
//     // 1. Retrieve the token from the request headers
//     const token = req.headers.authorization;

//     if (!token) {
//       throw new Error("Authorization token not provided");
//     }

//     // 2. Decode the token to extract the user's ID
//     const decoded = jwt.verify(token.split(" ")[1], "your-secret-key"); // Assuming the token is in the format "Bearer token"
//     const userId = decoded.userId;

//     // 3. Use the user's ID to fetch the user's data from the database
//     const user = await User.findById(userId);

//     if (!user) {
//       throw new Error("User not found");
//     }

//     // 4. Return the user's data as the response
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
//import User from "../models/User.js";
const User = require("../models/User");

{
  /* req = request is the body of the infomation, 
   while res = is the response to the frontend  */
}
exports.getUser = async (req, res) => {
  const { username } = req.params;

  try {
    const { id } = req.params;
    console.log("id:", id);
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
