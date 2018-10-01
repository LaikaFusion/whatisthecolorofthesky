const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const port = 3000;

const imgur = require("./imgurPuller/imgurpuller");
const sky = require("./routers/skyRouter");
const colorCompare = require('./colorcompare');
const addingfunctions=require("./addingfunctions")

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/sky", sky);



app.post("/imgur", async (req, res) => {
  if(req.body.secretpass !== process.env.CLIENTID){
    res.status(403).json({error:'invalid pass'});
    return;
  }
  if(!req.body.pages){
    req.body.pages = 1;
  }
  let imgurArray = await imgur(req.body.pages);
  let holdingArr =  await addingfunctions.colorArr(imgurArray);
  Promise.all(holdingArr)
    .then(async completed => {
      try{
        let dbAdds = await addingfunctions.dbAdds(completed,imgurArray);
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
      }
      catch(err){
        console.log(err);
        return
      }
   
    })
    .catch(function(err) {
      res.status(500).json({ error: 3 });
      console.log(err);
      return;
    });
});

app.get("/", (req, res) => {
  res.send("Wrong endpoint");
});
colorCompare.getAllColors();
app.listen(port, () => console.log(`App listening on port ${port}!`));
