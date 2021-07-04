import {
  createConfiguration,
  loadConfiguration,
  startServer,
  build,
} from 'snowpack';

// const config = createConfiguration();
(async () => {
  const config = await loadConfiguration({}, './snowpack.config.js');

  const server = await startServer({ config });

  // const { contents } = await server.loadUrl('/dist/index.js', {});
  // console.log('contents: ', contents);
})();
