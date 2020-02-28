const { Sequelize } = require("sequelize");

const db = new Sequelize("octopusx", "oxuser", "hn73KA$sn2Ssds9SS", {
  host: "85.10.205.173",
  dialect: "mysql",
  port: 3306,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 100000000
  }
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

module.exports = db;
