import express from "express";
const router = express.Router();
import { getUser, getDashboardStats } from "../controllers/generalController";

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);
module.exports = router;
