const express = require("express");
const { auth } = require("express-openid-connect");
var indexRouter = require("./routes/index");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Task = require("./models/task");
const cors = require("cors");
require("dotenv").config();

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
    audience: "http://localhost:5000",
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

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Endpoint to get the task list
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks" });
  }
});

// Endpoint to get one task
app.get("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error retrieving task with id ${taskId}` });
  }
});

// Endpoint to create a new task
app.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: "Error creating task" });
  }
});

// Endpoint to update a task by id
app.put("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: `Error updating task with id ${taskId}` });
  }
});

// Endpoint to delete a task by id
app.delete("/tasks/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      res.status(404).json({ message: `No task found with id ${id}` });
    } else {
      res
        .status(200)
        .json({ message: `Task with id ${id} deleted successfully` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error deleting task with id ${id}` });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
