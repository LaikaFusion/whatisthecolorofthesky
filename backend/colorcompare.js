const dbHelpers = require("./dbHelpers/helpers");
const nearestColor = require("nearest-color");
const chroma = require("chroma-js")

let colorList = [];

module.exports = {
  getAllColors: async () => {
    let nodupObj = {};
    try {
      let results = await dbHelpers.getAllColors();
      results.forEach(element => {
        for (let index = 0; index < 5; index++) {
          nodupObj[element[`color${index + 1}`]] = 0;
        }
      });
      colorList = Object.keys(nodupObj).map((e,i)=>{
        // return chroma(e).rgb();
        return e;
      });
      
    } catch (err) {
      console.log(err);
    }
  },
  findNearestColor:  (colorToFind) => {
    try {
      let colorCheck =nearestColor.from(colorList);
      console.log(colorCheck(colorToFind));
    } catch (err) {
      console.log(err);
    }
  }
};
