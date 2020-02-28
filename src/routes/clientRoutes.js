var clientController = require("../controllers/clientController");
var authController = require("../controllers/auth");
const express = require("express");
const router = new express.Router();

// Create endpoint handlers for /clients
router.post("/create", clientController.postClients);
router.get("/clients", clientController.getClients);

module.exports = router;
