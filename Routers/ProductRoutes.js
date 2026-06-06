const express = require("express");

const router = express.Router();

const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
} = require("../Controllers/ProductController");

router.post("/add-product",addProduct);

router.get( "/all-products",getProducts);
router.get("/:id", getSingleProduct);


router.put("/update-product/:id",updateProduct);


router.delete("/delete-product/:id",deleteProduct);

module.exports = router;