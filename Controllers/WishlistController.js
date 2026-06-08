const Wishlist = require("../Models/WishlistModel");
const Cart = require("../Models/Cart");

const addWishlist = async (req, res) => {
  try {
    const { userId,userEmail, name, category, price, image } = req.body;

    const exists = await Wishlist.findOne({ userId, name });

    if (exists) {
      return res.status(400).json({
        message: "Already in wishlist",
      });
    }

    const wishlist = new Wishlist({
      userId,
      userEmail,
      name,
      category,
      price,
      image,
    });

    await wishlist.save();

    res.status(201).json({
      success: true,
      message: "Added To Wishlist",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await Wishlist.find({ userId });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Removed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const moveToCart = async (req, res) => {
  try {
    const item = await Wishlist.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item Not Found",
      });
    }

    const cartItem = new Cart({
       userEmail: item.userEmail, 
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.image,
      quantity: 1,
    });

    await cartItem.save();
    await Wishlist.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Moved To Cart",
    });

  } catch (error) {
    console.log("MOVE TO CART ERROR:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addWishlist,
  getWishlist,
  removeWishlist,
  moveToCart,
};
