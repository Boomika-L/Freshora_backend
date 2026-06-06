const User = require("../Models/UserSchema");

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, mobile, address } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        mobile,
        address,
      },
      { new: true },
    );

    res.status(200).json({
      message: "Profile Updated",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
