const User = require("../models/users");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const { signToken, decodeToken } = require("../config/jwt.js");

const UserController = {
  create: async function(req, res) {
    console.log("jjjj");
    const self = this;
    try {
      await bcrypt.hash(req.body.password, saltRounds, async function(
        err,
        hash
      ) {
        if (err) {
          res.status(500).send(err);
        }
        let data = req.body;
        user = new User(data);
        let createdUser = await user.save();
        // let token = await signToken({ email, user });
        res
          .status(201)
          .send({ message: "Registration successful", user: createdUser });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  get: async function(req, res) {
    try {
      let user = await User.find({});

      res.status(200).send({ message: "Users fetched successful", user });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  login: async function(req, res) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ message: "Invalid user details" });
      }

      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        return res
          .status(400)
          .send({ message: "Email or password is incorrect" });
      }

      let token = await signToken({ user });
      let company = await Company.find({ admin: user._id });
      res
        .status(200)
        .send({ message: "Login successful", token, user, company });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = UserController;
