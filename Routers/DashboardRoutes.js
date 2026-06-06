const express = require("express");

const router = express.Router();

const {
  getDashboard
} = require("../Controllers/DashboardController");

router.get("/", getDashboard);

module.exports = router;