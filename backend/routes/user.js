const {
  login,
  register,
  logout,
  getMyProfile,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth.js");
const router = require("express").Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/my-profile", isAuthenticated, getMyProfile)
  .get("/logout", logout);

module.exports = router;
