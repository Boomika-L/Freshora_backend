const Cart = require("../Models/Cart");
const Wishlist = require("../Models/WishlistModel");
const Order = require("../Models/OrderModel");
const User = require("../Models/UserSchema");

const getDashboard = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const wishlistItems = await Wishlist.countDocuments();

    const cartItems = await Cart.countDocuments();

    const orders = await Order.find();

    const totalSpending = orders.reduce(
      (sum, item) => sum + item.totalAmount,
      0,
    );

    res.status(200).json({
      totalOrders,
      wishlistItems,
      cartItems,
      totalSpending,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};
