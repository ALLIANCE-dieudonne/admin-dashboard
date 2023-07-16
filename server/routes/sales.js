import express from "express";
import getSales from "../controllers/salesController";
const router = express.Router();

router.get("/sales", getSales);

module.exports = router;
