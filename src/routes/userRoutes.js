const express = require("express");
const router = new express.Router();

const UserController = require("../controllers/userController");
var authController = require("../controllers/auth");

router.post("/create", UserController.create);
router.get("/user", authController.isAuthenticated, UserController.get);
// router.post("/login", UserController.login);

module.exports = router;
