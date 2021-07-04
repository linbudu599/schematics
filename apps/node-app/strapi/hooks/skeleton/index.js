module.exports = (strapi) => {
  const hook = {
    /**
     * Default options
     */

    defaults: {
      // config object
    },

    /**
     * Initialize the hook
     */

    async initialize() {
      console.log(strapi.config.hook.settings.skeleton);
      // await someAsyncCode()
      // const settings = {...this.defaults, ...strapi.config.hook.settings.**};
    },
  };

  return hook;
};
