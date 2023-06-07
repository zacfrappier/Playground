const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks" });
  }
});

// Get a task by ID
router.get("/:id", async (req, res) => {
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

// Create a new task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: "Error creating task" });
  }
});

// Update a task
router.put("/:id", async (req, res) => {
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

// Delete a task
router.delete("/:id", async (req, res) => {
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

module.exports = router;
