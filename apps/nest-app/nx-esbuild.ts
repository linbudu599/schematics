import { BuildOptions } from 'esbuild';
import { NXESBuildConfigExport } from 'nx-plugin-esbuild';

export default {
  esbuildOptions: {
    // write: true,
    // plugins: [],
    // format: 'esm',
    // splitting: true,
    // watch: {
    //   onRebuild: () => {
    //     console.log('rebuild!');
    //   },
    // },
    // for browser
    target: ['es61'],
    format: 'esm',
    // platform: 'browser',
    // external: [],
  },
} as NXESBuildConfigExport;
