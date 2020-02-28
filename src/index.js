const express = require("express");
const app = express();
const port = process.env.PORT || 2340;
const { Sequelize } = require("sequelize");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  OAuth2Server = require("oauth2-server"),
  Request = OAuth2Server.Request,
  Response = OAuth2Server.Response;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const db = require("./config/database");
app.use(cors("*"));

// const testRouter = require("./routes/testRoutes.js");
// const clientRouter = require("./routes/clientRoutes");
const userRouter = require("./routes/userRoutes");
// const oauth2Router = require("./routes/oauth2Router");

app.oauth = new OAuth2Server({
  model: require("./config/model"),
  accessTokenLifetime: 60 * 60,
  allowBearerTokensInQueryString: true
});

app.all("/oauth/token", obtainToken);

app.get("/", authenticateRequest, function(req, res) {
  res.send("Congratulations, you are in a secret area!");
});

app.post("/create/token", function(req, res) {
  res.send({ token: "dbc6b91579ee8cd4fc350387a05b4ac99f621719" });
});

app.get("/test", function(req, res) {
  res.send("Congratulations, you are here");
});

function obtainToken(req, res) {
  var request = new Request(req);
  var response = new Response(res);

  return app.oauth
    .token(request, response)
    .then(function(token) {
      res.json(token);
    })
    .catch(function(err) {
      res.status(err.code || 500).json(err);
    });
}

function authenticateRequest(req, res, next) {
  var request = new Request(req);
  var response = new Response(res);

  return app.oauth
    .authenticate(request, response)
    .then(function(token) {
      next();
    })
    .catch(function(err) {
      res.status(err.code || 500).json(err);
    });
}

// app.use(express.json());
// app.use("/test", testRouter);
// app.use("/client", clientRouter);
app.use("/users", userRouter);
// app.use("/oauth2", oauth2Router);

app.listen(port, () => {
  console.log(`OctopusX-Auth Server running on PORT ${port}`);
});
