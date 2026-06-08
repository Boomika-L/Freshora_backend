const express = require("express");

const {
  signup,
  login,
  forgotPassword
} = require("./../Controllers/UserController");

const router = express.Router();
router.post("/forgot-password", forgotPassword);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
