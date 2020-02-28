const express = require("express");
const passport = require("passport");
const passportSetup = require("../config/passport");

const TestController = require("../controllers/testController");
const router = new express.Router();

router.get("/create", passport.authenticate("oauth2"), TestController.create);
router.get("/oauth", TestController.test);

module.exports = router;
