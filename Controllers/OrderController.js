const Order = require("../Models/OrderModel");
const createOrder = async (req, res) => {
  try {
    const {
      userId,
      userName,
      userEmail,
      items,
      subtotal,
      deliveryCharge,
      totalAmount,
      paymentMethod,
      shippingAddress,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const newOrder = new Order({
      userId,
      userName,
      userEmail,
      items,
      subtotal,
      deliveryCharge,
      totalAmount,
      paymentMethod,
      shippingAddress,
      status: "Pending",
      orderDate: new Date(),
    });

    await newOrder.save();
  await Cart.deleteMany({
      userEmail: userEmail,
    });
    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const updated = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const placeOrder = async (req, res) => {
  try {
    const order = new Order(req.body);

    const savedOrder = await order.save();

    res.status(201).json({
      message: "Order Placed Successfully",
      order: savedOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  updateOrderStatus,
  placeOrder,
};
