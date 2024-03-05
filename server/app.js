const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const generalRoutes = require("./routes/general");
const clientRoutes = require("./routes/client");
const managementRoutes = require("./routes/management");
const teamRoutes = require("./routes/team");
// import clientRoutes from "./routes/client.js";
// import clientRoutes from "./routes/general.js";
// import clientRoutes from "./routes/management.js";
// import clientRoutes from "./routes/team.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
app.use("/api", authRoutes);
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/team", teamRoutes);
app.use("/management", managementRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
