// var mongoose = require('mongoose'),
// 	modelName = 'user',
// 	schemaDefinition = require('../schema/' + modelName),
// 	schemaInstance = mongoose.Schema(schemaDefinition),
// 	modelInstance = mongoose.model(modelName, schemaInstance);

// module.exports = modelInstance;

const Sequelize = require("sequelize");
const db = require("../config/database");
const moment = require("moment");

const Users = db.define("auth_user", {
  username: {
    type: Sequelize.STRING,
    required: true
  },
  password: {
    type: Sequelize.STRING,
    required: true
  }
});

module.exports = Users;
