import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import clientRoutes from "./routes/general.js";
import clientRoutes from "./routes/management.js";
import clientRoutes from "./routes/team.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/*Routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/team", teamRoutes);
app.use("/management", managementRoutes);






