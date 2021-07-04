/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },

  // TODO: init生成的配置中为插件提供类型
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        failOnWarnings: true,
        extendConfig: (config) => {
          console.log('====');
          console.log('config: ', config);
          config.output.path = path.resolve(__dirname, 'webpack-dist');
        },
      },
    ],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // routes意味着 所有不包含文件扩展名，或包含.html后缀的请求都将指向这里
    // 包括下面定义的/api/test
    // { match: 'routes', src: '.*', dest: '/index.html' },
    // 而all则意味着所有的请求都将指向
    // 使用http2-proxy，来在这里实现代理功能
    {
      src: '/api/test',
      dest: (req, res) => {
        res.end('xxxx');
      },
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {},
  buildOptions: {
    watch: true,
    /* ... */
  },
};
