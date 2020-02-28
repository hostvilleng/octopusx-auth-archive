// var mongoose = require('mongoose'),
// 	modelName = 'token',
// 	schemaDefinition = require('../schema/' + modelName),
// 	schemaInstance = mongoose.Schema(schemaDefinition);

// schemaInstance.index({ "refreshTokenExpiresAt": 1 }, { expireAfterSeconds: 0 });

// var modelInstance = mongoose.model(modelName, schemaInstance);

// module.exports = modelInstance;

const Sequelize = require("sequelize");
const db = require("../config/database");
const moment = require("moment");

const Token = db.define("auth_token", {
  accessToken: {
    type: Sequelize.STRING,
    required: true
  },
  accessTokenExpiresAt: {
    type: Sequelize.DATE,
    required: true
  },
  refreshToken: {
    type: Sequelize.STRING,
    required: true
  },
  refreshTokenExpiresAt: {
    type: Sequelize.DATE,
    required: true
  },
  client: {
    type: Sequelize.JSON
  },
  user: {
    type: Sequelize.JSON
  }
});

module.exports = Token;
