import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import welcomeRoute from "../routes/welcome-route.js";

dotenv.config();

export const web = express();

web.use(express.json());
web.use(cors());

web.use("/api", welcomeRoute);
