const express = require("express");
const app = express();
// const Jwt = require("express-jwt");
// const Jwks = require("jwks-rsa");
const { auth } = require("express-oauth2-jwt-bearer");

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: "https://dev-ezr2jpqdbryydw6b.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
// this requires all requests to have a Jwt check
// app.use(jwtCheck);

app.get("/public", (req, res) => {
  res.json({
    type: "public",
  });
});
// by passing the jwtcheck into the request we isolate the requierment to specific requests vs requiering all requests to have the jwtcheck
app.get("/private", jwtCheck, (req, res) => {
  res.json({
    type: "private",
  });
});

app.listen(3001);
