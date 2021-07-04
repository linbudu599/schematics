const strapi = require("strapi");

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      options: {
        debug: false,
        autoMigrate: true,
        useNullAsDefault: true,
        pool: {},
      },
    },
  },
});
