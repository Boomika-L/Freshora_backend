const express = require("express");

const {
  addToCart,
  getCartItems,
  deleteCartItem,
  getCart,
  updateQuantity
} = require("../Controllers/CartController");

const router = express.Router();

router.post("/add", addToCart);
router.get("/all/:email", getCart); 
router.get("/all", getCartItems);

router.delete("/delete/:id", deleteCartItem);

router.put("/update/:id", updateQuantity);

module.exports = router;
