import { build, serve } from 'esbuild';
import { esbuildHtmlPlugin } from './html-plugin';
// import { esbuildPluginTsc } from './esbuild-decorator.plugin';
import path from 'path';
import { esbuildDecoratorPlugin } from './decorator';
import module from 'module';
(async () => {
  try {
    // const res1 = await build({
    //   entryPoints: ['./apps/nest-app/src/main.ts'],
    //   bundle: true,
    //   tsconfig: './tsconfig.base.json',
    //   // outdir: './html-plugin/out',
    //   outfile: './tttttest/main.js',
    //   plugins: [
    //     // esbuildHtmlPlugin({
    //     //   templatePath: './html-plugin/src/index.html',
    //     // }),
    //     esbuildDecoratorPlugin({
    //       isNxProject: true,
    //     }),
    //   ],

    //   platform: 'node',
    //   format: 'cjs',
    //   external: ['@nestjs/core', '@nestjs/common'],
    // });
    // console.log('res1: ', res1);

    const serveRes = await serve(
      {
        servedir: './serve-dir',
      },
      {
        entryPoints: ['./serve-dir/serve-script.ts'],
        bundle: true,
        tsconfig: './tsconfig.base.json',
        // outdir: './html-plugin/out',
        // outfile: './tttttest/main.js',
        outdir: './serve-dir/js',
        plugins: [
          // esbuildHtmlPlugin({
          //   templatePath: './html-plugin/src/index.html',
          // }),
          esbuildDecoratorPlugin({
            isNxProject: true,
          }),
        ],

        platform: 'node',
        format: 'cjs',
        external: ['@nestjs/core', '@nestjs/common'],
      }
    );
    console.log(serveRes);
  } catch (error) {
    console.log('error: ', error);
  }
})();
