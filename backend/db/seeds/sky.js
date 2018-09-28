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
          color1: "#6b769d",
          color2: "#086a67",
          color3: "#4736ab",
          color4: "#f295a0",
          color5: "#644e5c",
          url: "https://i.imgur.com/gg7tgmb.jpg"
        }
      ]);
    });
};
