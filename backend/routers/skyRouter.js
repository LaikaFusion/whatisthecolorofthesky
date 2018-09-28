const express = require("express");
const router = express.Router();
const dbHelpers = require("../dbHelpers/helpers");

router.get("/", async (req, res) => {
  let results = await dbHelpers.getSkies();
  res.status(200).json(results);
});

router.get("/:id", async (req, res) => {
  try {
    let results = await dbHelpers.getSky(req.params.id);
    if (results.length === 0) {
      res.status(400).json({ error: "That ID does not exist" });
      return;
    }
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
