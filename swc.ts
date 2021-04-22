import {
  transform as swcTransform,
  transformSync,
  transformFileSync as swcTransformFileSync,
  Options as SwcOptions,
} from '@swc/core';
import path from 'path';
import fs from 'fs';

const trans = (path: string) =>
  transformSync(path, {
    swcrc: false,
    module: {
      type: 'commonjs',
      strict: false,
      lazy: false,
      noInterop: false,
    },
    isModule: true,
    exclude: [
      '^.*.json$',
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.spec.json',
    ],
    jsc: {
      target: 'es5',
      externalHelpers: false,
      // more efficient code
      loose: true,
      // ts parser or es parser
      parser: {
        syntax: 'typescript',
        tsx: false,
        decorators: true,
        dynamicImport: false,
      },
      transform: {
        decoratorMetadata: true,
      },
    },

    // minify: true,
  }).code;

const output = path.join(__dirname, 'swc-output');
const input = path.join(__dirname, './apps/nest-app');

// fs.rmSync(output, { recursive: true, force: true });
// fs.mkdirSync(output);

fs.readdirSync(input).forEach((file) => {
  const content = trans(path.resolve(input, file));
  fs.writeFileSync(path.resolve(output, file), content);
});
