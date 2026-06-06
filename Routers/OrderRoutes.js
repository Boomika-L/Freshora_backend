const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  updateOrderStatus,
  placeOrder,
} = require("../Controllers/OrderController");
router.post("/create", createOrder);

router.get("/myorders/:userId", getMyOrders);
router.post("/place-order", placeOrder);
router.put("/status/:orderId", updateOrderStatus);

module.exports = router;