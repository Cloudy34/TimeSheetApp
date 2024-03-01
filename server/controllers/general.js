import User from "../models/User.js";
import collection from "../mongo.js";

{
  /* req = request is the body of the infomation, 
  while res = is the response to the frontend  */
}
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await collection.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
