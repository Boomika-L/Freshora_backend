const express = require("express");

const router = express.Router();

const {
  addWishlist,
  getWishlist,
  removeWishlist,
  moveToCart
} = require(
  "../Controllers/WishlistController"
);
router.post("/add",addWishlist);

router.get("/all",getWishlist);
router.get("/all/:userId", getWishlist);
router.delete("/delete/:id",removeWishlist);

router.post("/move-to-cart/:id",moveToCart);

module.exports = router;