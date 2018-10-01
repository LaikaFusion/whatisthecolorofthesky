exports.up = function(knex, Promise) {
  return knex.schema.createTable("sky_table", function(sky) {
    sky.increments();

    sky.string("color1").notNullable();
    sky.string("color2").notNullable();
    sky.string("color3").notNullable();
    sky.string("color4").notNullable();
    sky.string("color5").notNullable();

    sky.string("url").notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("sky_table");
};
