const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  title: String,
  text: String,
  user: Object, // For now, let's store the whole user object from JWT
});

const Prompt = mongoose.model("Prompt", PromptSchema);

module.exports = Prompt;
