const express = require("express");
const router = express.Router();

const {
  getOffers,
  createOffer
} = require("../Controllers/OfferController"); // ✅ IMPORTANT

router.get("/", getOffers);
router.post("/", createOffer);

module.exports = router;