const Cart = require("../Models/Cart");

const addToCart = async (req, res) => {
  try {
    const item = await Cart.create(req.body);

    res.json({
      success: true,
      message: "Added To Cart",
      item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCartItems = async (req, res) => {
  try {
    const items = await Cart.find();

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getCart = async (req, res) => {
  try {
    const items = await Cart.find({
      userEmail: req.params.email
    });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Item Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateQuantity = async (req, res) => {
  try {
    const item = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        quantity: req.body.quantity,
      },
      { new: true },
    );

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  deleteCartItem,
  updateQuantity,
  getCart,
};
