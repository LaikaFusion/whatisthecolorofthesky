exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("sky")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("sky").insert([
        {
          color1: "#6b769d",
          color2: "#086a67",
          color3: "#4736ab",
          color4: "#f295a0",
          color5: "#644e5c",
          url: "https://i.imgur.com/ODGiVwx.jpg"
        },
        {
          color1: "#808080",
          color2: "#C0C0C0",
          color3: "#000000",
          color4: "#FF0000",
          color5: "#800000",
          url: "https://i.imgur.com/gg7tgmb.jpg"
        }
        ,
        {
          color1: "#00FF00",
          color2: "#FFFF00",
          color3: "#4736ab",
          color4: "#808000",
          color5: "#008000",
          url: "https://i.imgur.com/qGbf1nS.jpg?1"
        },
        {
          color1: "#00FFFF",
          color2: "#008080",
          color3: "#0000FF",
          color4: "#000080",
          color5: "#FF00FF",
          url: "https://i.imgur.com/rmoy0Bo.jpg"
        },
        {
          color1: "#657383",
          color2: "#306EFF",
          color3: "#438D80",
          color4: "#64E986",
          color5: "#FFD801",
          url: "https://i.imgur.com/GfPqUJZ.jpg"
        },
        {
          color1: "#F88158",
          color2: "#F62817",
          color3: "#EDC9AF",
          color4: "#C12869",
          color5: "#FDD7E4",
          url: "https://i.imgur.com/wAVjffs.jpg"
        },
        {
          color1: "#5E5A80",
          color2: "#6C2DC7",
          color3: "#7A5DC7",
          color4: "#B041FF",
          color5: "#F9B7FF",
          url: "https://i.imgur.com/gAl4HPV.jpg"
        },
        {
          color1: "#EBDDE2",
          color2: "#FFF5EE",
          color3: "#E0B0FF",
          color4: "#C45AEC",
          color5: "#583759",
          url: "https://i.imgur.com/Et9Rn38.jpg"
        },
        {
          color1: "#C12283",
          color2: "#CA226B",
          color3: "#F433FF",
          color4: "#F52887",
          color5: "#F660AB",
          url: "https://i.imgur.com/MAROj8t.jpg"
        },
        {
          color1: "#E7A1B0",
          color2: "#FAAFBA",
          color3: "#FCDFFF",
          color4: "#E8ADAA",
          color5: "#C48189",
          url: "https://i.imgur.com/5aFmTRO.jpg"
        }
      ]);
    });
};
