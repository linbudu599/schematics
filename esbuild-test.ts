import { build, serve } from 'esbuild';
import path from 'path';
import { esbuildPluginDecorator } from './plugins/decorator';
import { esbuildPluginAliasPath } from './plugins/alias';
import run from './plugins/esbuild-plugin-run';
import { esbuildPluginFileSize } from './plugins/file-size';
// import compress from './plugins/compress';
import ignore from './plugins/ignore';
import yaml from './plugins/yaml';
import clean from './plugins/clean';
import execa from 'execa';
import globby from 'globby';
import markdown from './plugins/markdown';
import svgr from './plugins/svgr';
import copy from './plugins/copy';

(async () => {
  try {
    const res1 = await build({
      entryPoints: ['./demo.ts'],
      // entryPoints: ['./demo-01.ts', './demo.ts'],
      // entryPoints: ['apps/nest-app/src/main.ts'],
      bundle: true,
      tsconfig: './tsconfig.base.json',
      // outfile: './tttttest/main.js',
      outdir: './tttttest',
      plugins: [
        // esbuildPluginAliasPath({
        //   alias: { '@/foo': 'D://schematics/apps/nest-app/src/alias/foo.ts' },
        //   tsconfigPath: 'apps/nest-app/tsconfig.app.json',
        // }),

        clean({
          patterns: ['./tttttest/*'],
        }),
        copy({
          assets: {
            from: ['./assets/*'],
            to: ['./assets', './tmp-assets'],
          },
        }),
      ],
      write: true,
      watch: false,
      platform: 'node',
      format: 'cjs',
      // external: ['@nestjs/core', '@nestjs/common'],
    });
    // console.log('res1: ', res1);
  } catch (error) {
    // console.log('error: ', error);
  }
})();
