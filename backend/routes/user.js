const { login, register, logout } = require("../controllers/user");

const router = require("express").Router();

router.post("/register", register).post("/login", login).get("/logout", logout);

module.exports = router;
