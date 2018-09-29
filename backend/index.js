const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const port = 3000;

const imgur = require("./imgurPuller/imgurpuller");
const sky = require("./routers/skyRouter");
const colorCompare = require('./colorcompare');

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/sky", sky);



app.get("/imgur", (req, res) => {
  imgur();
  res.send("Tada");
});

app.get("/", (req, res) => {
  res.send("Wrong endpoint");
});
colorCompare.getAllColors();
app.listen(port, () => console.log(`App listening on port ${port}!`));
