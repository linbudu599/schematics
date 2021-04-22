import type { Plugin } from 'esbuild';
import pathModule from 'path';

import type { Option } from './normalize-option';

import { normalizeOptions } from './normalize-option';

export function esbuildIgnorePlugin(options: Option[] = []): Plugin {
  const patterns = normalizeOptions(options);
  console.log('patterns: ', patterns);

  return {
    name: 'ignore',
    setup(build) {
      build.onResolve({ filter: /.*/, namespace: 'ignore' }, ({ path }) => ({
        path,
        namespace: 'ignoere',
      }));

      for (const pattern of patterns) {
        build.onResolve(
          { filter: pattern.resourceRegExp },
          ({ path, resolveDir }) => {
            console.log('path: ', path);
            console.log('resolveDir: ', resolveDir);
            console.log('pattern: ', pattern);
            console.log(resolveDir.match(pattern.contextRegExp));
            console.log(pathModule.join(resolveDir, path));
            return resolveDir.match(pattern.contextRegExp)
              ? {
                  path,
                  namespace: 'ignore',
                }
              : {
                  path,
                };
          }
        );
      }

      build.onLoad({ filter: /.*/, namespace: 'ignore' }, () => ({
        contents: '',
      }));
    },
  };
}
