const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const note = require("../models/note");
const Counter = require("../models/counter");

router.use(express.json());

router.post("/api/create", async (req, res) => {
  const { encrypted, key, pwd } = req.body;

  if (!encrypted || !key) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    const noteid = nanoid(9);

    const newNote = new note({
      noteid,
      encrypted,
      key,
      pwd,
    });

    await newNote.save();

    await Counter.findByIdAndUpdate(
      "notes",
      { $inc: { createdCount: 1 } },
      { upsert: true, new: true }
    );

    res.status(201).json({ message: "Note Created", id: noteid });
  } catch (error) {
    console.error("Error saving note:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/api/note/:noteid", async (req, res) => {
  const { noteid } = req.params;

  try {
    const notes = await note.findOne({ noteid });

    if (!notes) {
      return res.status(404).json({ exists: false, message: "Note not found" });
    }

    res.status(200).json({
      exists: true,
      data: notes.encrypted,
      key: notes.key,
      pwd: notes.pwd,
      created: notes.createdAt,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/api/delete/:noteid", async (req, res) => {
  const { noteid } = req.params;

  try {
    const notes = await note.deleteOne({ noteid });

    if (!notes) {
      return res.status(404).json({ message: "Not found" });
    }

    await Counter.findByIdAndUpdate(
      "notes",
      { $inc: { deletedCount: 1 } },
      { upsert: true, new: true }
    );

    res.status(200).json({
      message: "Note Destroyed",
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/api/count", async (req, res) => {
  try {
    const counter = await Counter.findById("notes");
    res.status(200).json(counter || { createdCount: 0, deletedCount: 0 });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch counts" });
  }
});

module.exports = router;
