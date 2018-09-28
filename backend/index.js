const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = 3000;
const sky = require("./routers/skyRouter");

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/sky", sky);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));