import express from "express";
import welcomeController from "../controllers/welcome-controller.js";

const router = express.Router();

router.get("/", welcomeController.index);

export default router;
