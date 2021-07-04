const strapi = require("strapi");
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2a41f3a99f3b649590fe8cfd5d4916b5"),
      events: {},
    },
    url: "admin",
    autoOpen: false,
    serveAdminPanel: true,
    watchIgnoreFiles: ["./notes", "notes", "/notes"],
  },
  emitOnErrors: false,
  url: "",
  proxy: false,
  cron: {
    enabled: false,
  },
});
