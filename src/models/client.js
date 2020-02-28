const Sequelize = require("sequelize");
const db = require("../config/database");
const moment = require("moment");

const Client = db.define("auth_client", {
  id: {
    type: Sequelize.STRING,
    required: true,
    primaryKey: true
  },
  clientId: {
    type: Sequelize.STRING,
    required: true
  },
  clientSecret: {
    type: Sequelize.STRING,
    required: true
  },
  grants: {
    type: Sequelize.STRING,
    get: function() {
      return JSON.parse(this.getDataValue("grants"));
    },
    set: function(val) {
      return this.setDataValue("grants", JSON.stringify(val));
    }
  }
  // clientSecret: {
  //   type: Sequelize.STRING,
  //   get: function() {
  //     return JSON.parse(this.getDataValue("grants"));
  //   },
  //   set: function(val) {
  //     return this.setDataValue("grants", JSON.stringify(val));
  //   }
  // }
});

module.exports = Client;
