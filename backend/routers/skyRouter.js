const express = require("express");
const router = express.Router();
const dbHelpers = require("../dbHelpers/helpers");
const colorCompare = require("../colorcompare");
const addingfunctions = require("../addingfunctions");

router.get("/view", async (req, res) => {
  let results = await dbHelpers.getSkies();
  res.status(200).json(results);
});

router.post("/", async (req, res) => {
  if (!req.body.color || req.body.color.length !== 7) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  req.body.color = colorCompare.findNearestColor(req.body.color);
  try {
    let results = await dbHelpers.getSkyByColor(req.body.color);
    let randomURL = results[Math.floor(Math.random() * results.length)];
    res.status(200).json(randomURL);
  } catch (err) {
    console.log(err);
  }
});

router.post("/add", async (req, res) => {
  let urlList = JSON.parse(req.body.images);
  let holdingArr = await addingfunctions.colorArr(urlList);
  Promise.all(holdingArr)
    .then(async completed => {
      try {
        let dbAdds = await addingfunctions.dbAdds(completed, urlList);
        Promise.all(dbAdds)
          .then(val => {
            let count = 0;
            val.forEach(e => {
              if (!e) {
                count++;
              }
            });
            res.status(200).json({ message: `Success with ${count} failures` });
            return;
          })
          .catch(function(err) {
            if (res.headersSent) {
              return;
            }
            res.status(500).json({ error: err });
            console.log(err);
            return;
          });
      } catch (err) {
        console.log(err);
        return;
      }
    })
    .catch(function(err) {
      res.status(500).json({ error: 3 });
      console.log(err);
      return;
    });
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
