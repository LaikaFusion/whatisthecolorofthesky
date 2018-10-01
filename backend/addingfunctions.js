const getColors = require("get-image-colors");
const dbHelpers = require("./dbHelpers/helpers");

module.exports={
  colorArr: (urlList)=>{
    return  urlList.map( (e, i) => {
      try {
        return  getColors(e)
          .then(colors => colors.map(color => color.hex()))
          .catch(err => {
            console.log(err);
            return;
          });
      } catch (err) {
        console.log(err);
        return;
      }
    });
  },
  dbAdds: (Arr,urlList)=>{
    return Arr.map(async (element, i) => {
      if (!element) {
        return;
      }
      const colorObj = {};
      colorObj.url = urlList[i];
      element.forEach((e, index) => {
        colorObj[`color${index + 1}`] = e;
      });
      try {
        return await dbHelpers.addSky(colorObj);
      } catch (err) {
        console.log(err);
        return;
      }
    });
  }
}