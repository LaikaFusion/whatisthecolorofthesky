const knex = require("knex");
const dbEngine = process.env.DB || 'development';
const config = require("../knexfile.js");
const db = knex(config.development);

module.exports = {
  getSkies: () => {
    return db("sky").then(results => {
      return results;
    });
  },

  getSky: id => {
    return db("sky")
      .where({ id: id })
      .first()
      .then(results => {
        return results;
      });
  },
  getAllColors: ()=>{
    return db("sky").select('color1','color2','color3','color4','color5')
  },
  addSky: ({ skyObj }) => {
    return db("sky").insert({
      color1: skyObj.color1,
      color2: skyObj.color2,
      color3: skyObj.color3,
      color4: skyObj.color4,
      color5: skyObj.color5,
      url: skyObj.url
    });
  }
};
