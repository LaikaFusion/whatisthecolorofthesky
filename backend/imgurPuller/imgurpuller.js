const http = require("https");
require("dotenv").config();

const options = {
  method: "GET",
  hostname: "api.imgur.com",
  headers: {
    Authorization: `Client-ID ${process.env.CLIENTID}`
  }
};

let imgur = async pages => {
  let imgArray = [];
  if (!pages) {
    pages = 1;
  }
  // for (let i = 0; i <= pages-1; i++) {
    try {
      imgArray = await imgurAPIrequest(imgArray, pages);
    } catch (err) {
      console.log(err);
      return;
    }
  // }
  // console.log(imgArray.length);
return imgArray;
};

imgurAPIrequest = async (Arr, page) => {
  let holdingArr = [...Arr];
  options.path = `/3/gallery/t/sky/${page}`;
  let requestreturn = await httpPromise();
  requestreturn.data.items.forEach((e, i) => {
    if (!e.images) {
      return;
    }
    return e.images.forEach(element => {
      if(RegExp('https:\/\/.*\.(gif|jpg|jpeg|png)').test(element.link)){
        holdingArr.push(element.link);
      }
    });
  });
  return holdingArr;
};

httpPromise = () => {
  return new Promise(function(resolve, reject) {
    var req = http.request(options, function(res) {
      // reject on bad status
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }
      // cumulate data
      var body = [];
      res.on("data", function(chunk) {
        body.push(chunk);
      });
      // resolve on end
      res.on("end", function() {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
    // reject on request error
    req.on("error", function(err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
    });
    // IMPORTANT
    req.end();
  });
};
module.exports = imgur;
