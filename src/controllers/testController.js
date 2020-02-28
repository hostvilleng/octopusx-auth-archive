const Test = require("../models/Test");
const passport = require("passport-oauth2");

const TestController = {
  create: async function(req, res) {
    res.status(401).send({ message: "You are not authorized!!!!!!!" });
  },
  create2: async function(req, res) {
    res.status(200).send({ message: "Welcome" });
  },
  test: async function(req, res) {
    res.status(200).send({ message: "test" });
  }
};

module.exports = TestController;
