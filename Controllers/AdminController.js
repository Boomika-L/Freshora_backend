const User = require("../Models/UserSchema");
const Product = require("../Models/Product");
const Order = require("../Models/OrderModel");
const getDashboardStats = async (req, res) => {
  try {
    const [totalUsers, totalProducts, totalOrders, orders, recentOrders] =
      await Promise.all([
        User.countDocuments(),
        Product.countDocuments(),
        Order.countDocuments(),
        Order.find().select("totalAmount"),
        Order.find()
          .sort({ createdAt: -1 })
          .limit(5)
          .populate("userId", "name email"),
      ]);
    const totalRevenue = orders.reduce(
      (sum, order) => sum + (order.totalAmount || 0),
      0,
    );
    res.status(200).json({
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue,
      recentOrders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getDashboardStats,
  getAllUsers,
  getAllOrders,
  updateOrderStatus,
};
