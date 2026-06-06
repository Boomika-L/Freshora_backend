const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getAllUsers,
  getAllOrders,
  updateOrderStatus
} = require("../Controllers/AdminController");

router.get("/dashboard", getDashboardStats);

router.get("/users", getAllUsers);
router.get("/orders", getAllOrders);

router.put("/orders/:id", updateOrderStatus);

module.exports = router;