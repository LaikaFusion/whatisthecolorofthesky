// Update with your config settings.
require("dotenv").config();
const dbConnection = process.env.DATABASE_URL;


module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/sky.sqlite3"
    },
    seeds: {
      directory: "./db/seeds"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true",
    seeds: {
      directory: "./db/seeds"
    },
    useNullAsDefault: true
  }
};
