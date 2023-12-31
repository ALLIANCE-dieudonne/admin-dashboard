import express from "express";
const router = express.Router();
import { getUser, getDashboardStats } from "../controllers/generalController.js";

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);
export default router;
