const express = require("express");

const app = express();


const port = 3000;
const getColors = require("get-image-colors");

const imgur = require('./imgurPuller/imgurpuller')
const sky = require("./routers/skyRouter");

app.use(cors());
app.use(express.json());
app.use(helmet());

app.post("/color", (req, res) => {
  let holdingArr = req.body.images.split(",").map(async (e, i) => {
    try {
     return await getColors(e).then(colors=> colors.map(color => color.hex()));
    } catch (err) {
      console.log(err);
    }
  });
  Promise.all(holdingArr).then((completed) =>  res.status(200).json({ message: completed }));
});

app.get("/imgur", (req, res) => {
  imgur();
  res.send("Wrong endpoint");

});


app.get("/", (req, res) => {
  res.send("Wrong endpoint");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

