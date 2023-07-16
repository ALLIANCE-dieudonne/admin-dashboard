import express from "express";
import { getAdmins } from "../controllers/managmentController.js";

const router = express.Router();

router.get("/admin", getAdmins);

module.exports = router;
