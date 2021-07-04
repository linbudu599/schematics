import { defineConfig, IConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/a', component: '@/pages/second' },
    { path: 'b', component: '@/pages/third' },
  ],
  forkTSChecker: {
    typescript: {
      enabled: true,
      configFile:
        process.env.NODE_ENV === 'development'
          ? './tsconfig.json'
          : 'apps/umi-app/tsconfig.json',
    },
  },
  fastRefresh: {},
  outputPath: '../../dist/apps/umi-app',
  externals: {
    react: 'window.React',
  },
  scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
} as IConfig);
