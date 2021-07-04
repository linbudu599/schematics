module.exports = (strapi) => {
  return {
    // can also be async
    initialize() {
      strapi.app.use(async (ctx, next) => {
        // await someAsyncCode()

        await next();

        // await someAsyncCode()
      });
    },
  };
};
