const express = require("express");
const router = express.Router();
const { requiresAuth } = require("express-openid-connect");
const axios = require("axios");

router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", {
    title: "Auth Test",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

router.get("/secured", requiresAuth(), async (req, res) => {
  let data = {};
  try {
    if (req.oidc.accessToken) {
      const { token_type, access_token } = req.oidc.accessToken;
      const apiResponse = await axios.get("http://localhost:5000/private", {
        headers: { Authorization: `${token_type} ${access_token}` },
      });
      data = apiResponse.data;
    }
  } catch (e) {
    console.error(e);
  }

  res.render("Secured", {
    title: "Auth Secured",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
    data: data,
  });
});

module.exports = router;
