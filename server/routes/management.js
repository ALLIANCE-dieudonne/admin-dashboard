const express = require("express");
const {
  getAdmins,
} = require("../controllers/managmentController");

const router = express.Router();

router.get("/admin", getAdmins);

module.exports = router;
