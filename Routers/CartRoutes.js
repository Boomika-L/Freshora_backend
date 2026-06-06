const express = require("express");

const {
  addToCart,
  getCartItems,
  deleteCartItem,
  updateQuantity
} = require("../Controllers/CartController");

const router = express.Router();

router.post("/add", addToCart);

router.get("/all", getCartItems);

router.delete("/delete/:id", deleteCartItem);

router.put("/update/:id", updateQuantity);

module.exports = router;