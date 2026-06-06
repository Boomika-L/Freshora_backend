const Offer = require("../Models/OfferModel");

const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching offers" });
  }
};

const createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const savedOffer = await offer.save();

    res.status(201).json(savedOffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOffers,
  createOffer
};