const http = require("https");
require("dotenv").config();

const options = {
  method: "GET",
  hostname: "api.imgur.com",
  headers: {
    Authorization: `Client-ID ${process.env.CLIENTID}`
  }
};

let imgur = async(pages) => {
  let imgArray=[]
  if(!pages){
    pages=5;
  }
  for (let i = 0; i <= pages; i++) {
    try{

      imgArray = await imgurAPIrequest(imgArray,i);

    }
    catch(err){
      console.log(err);
      return;
    }
  }
  console.log(imgArray.length)

};

imgurAPIrequest=(Arr,page)=>{
  let holdingArr=[...Arr]
  options.path = `/3/gallery/t/sky/${page}`;
  var req = http.request(options, function(res) {
    var chunks = [];
    res.on("data", function(chunk) {
      chunks.push(chunk);
    });

    res.on("end", function() {
      var body = Buffer.concat(chunks);
       JSON.parse(body).data.items.forEach((e,i)=>{
         if(!e.images){return;}
        return e.images.forEach(element => {
          holdingArr.push(element.link)
        });
      });
    });
  });

  req.end();
  console.log(holdingArr);
  return holdingArr;
}
module.exports = imgur;
