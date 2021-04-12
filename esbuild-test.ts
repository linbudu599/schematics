import { build } from 'esbuild';
import { esbuildPluginTsc } from './esbuild-decorator.plugin';

(async () => {
  try {
    const res = await build({
      entryPoints: ['./a.ts'],
      bundle: false,
      tsconfig: 'tsconfig.base.json',
      outfile: 'dist.js',
      plugins: [esbuildPluginTsc()],
      platform: 'node',
      external: [],
    });
    console.log('res: ', res);
  } catch (error) {}
})();
