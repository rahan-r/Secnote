const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  _id: String, 
  createdCount: { type: Number, default: 0 },
  deletedCount: { type: Number, default: 0 }
});

module.exports = mongoose.model("counter", counterSchema);
