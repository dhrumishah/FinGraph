const User = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { sendCookies } = require("../utils/features.js");

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: "User already exists",
    });
  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashedPassword });
  sendCookies(user, res, "Registered successfully", 201);
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json("User doesn't exist");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Invalid email or password");
    sendCookies(user, res, `Welcome back ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? true : false,
    })
    .json({
      success: true,
      user: req.user,
    });
};
