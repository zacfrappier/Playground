const express = require("express");
const { auth } = require("express-openid-connect");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./db");

const indexRouter = require("./routes/index");
const promptsRouter = require("./routes/prompts");
const tasksRouter = require("./routes/tasks");

// auth0 Config
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER,
  clientSecret: process.env.CLIENTSECRET,
  authorizationParams: {
    response_type: "code",
    audience: process.env.AUDIENCE,
    scope: "openid Profile email",
  },
};

// Initialize express app
const app = express();

// ejs views definition
app.set("views", "views");
app.set("view engine", "ejs");

// set up express.json middleware
app.use(express.json());

// set up express url handeler
app.use(express.urlencoded({ extended: true }));

// set up express static file service
app.use(express.static("public"));

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Set up CORS middleware
app.use(cors());

// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/prompts", promptsRouter);
app.use("/tasks", tasksRouter); // Here we're adding the tasksRouter

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
