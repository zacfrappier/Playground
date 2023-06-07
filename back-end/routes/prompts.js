const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const Prompt = require("../models/prompt");

const router = express.Router();

// Get all prompts
router.get("/", requiresAuth(), async (req, res) => {
  try {
    const prompts = await Prompt.find({});
    res.json(prompts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving prompts" });
  }
});

// Get a prompt by ID
router.get("/:id", requiresAuth(), async (req, res) => {
  try {
    const promptId = req.params.id;
    const prompt = await Prompt.findById(promptId);
    res.json(prompt);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error retrieving prompt with id ${promptId}` });
  }
});

// Create a new prompt
router.post("/", requiresAuth(), async (req, res) => {
  const { title, text } = req.body;
  const user = req.oidc.user;

  try {
    const newPrompt = new Prompt({ title, text, user });
    await newPrompt.save();
    res.status(201).json(newPrompt);
  } catch (error) {
    res.status(400).json({ message: "Error creating prompt", error });
  }
});

// Update a prompt
router.put("/:id", requiresAuth(), async (req, res) => {
  const promptId = req.params.id;

  try {
    const updatedPrompt = await Prompt.findByIdAndUpdate(promptId, req.body, {
      new: true,
    });
    res.status(200).json(updatedPrompt);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error updating prompt with id ${promptId}` });
  }
});

// Delete a prompt
router.delete("/:id", requiresAuth(), async (req, res) => {
  const id = req.params.id;

  try {
    const deletedPrompt = await Prompt.findByIdAndDelete(id);
    if (!deletedPrompt) {
      res.status(404).json({ message: `No prompt found with id ${id}` });
    } else {
      res
        .status(200)
        .json({ message: `Prompt with id ${id} deleted successfully` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error deleting prompt with id ${id}` });
  }
});

module.exports = router;
