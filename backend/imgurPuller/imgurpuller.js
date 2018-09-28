const http = require("https");
require("dotenv").config();

const options = {
  method: "GET",
  hostname: "api.imgur.com",
  path: "/3/gallery/t/sky",
  headers: {
    Authorization: `Client-ID ${process.env.CLIENTID}`
  }
};

let imgur = () => {
  var req = http.request(options, function(res) {
    var chunks = [];
    res.on("data", function(chunk) {
      chunks.push(chunk);
    });

    res.on("end", function() {
      var body = Buffer.concat(chunks);
      let imgArray=[]
       JSON.parse(body).data.items.forEach((e,i)=>{
        return e.images.forEach(element => {
          imgArray.push(element.link)
        });
      });
      console.log(imgArray)
    });
  });

  req.end();
};

module.exports = imgur;
