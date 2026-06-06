const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },

  name: String,
  image: String,
  price: Number,

  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model("Cart", cartSchema);