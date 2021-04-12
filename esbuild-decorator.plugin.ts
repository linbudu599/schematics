import fs from 'fs/promises';
import path from 'path';
import { inspect } from 'util';
import type { Plugin } from 'esbuild';
import {
  transpileModule,
  findConfigFile,
  sys,
  parseConfigFileTextToJson,
  parseJsonConfigFileContent,
} from 'typescript';

import stripComments from 'strip-comments';

export interface EsbuildTSCOptions {
  // If empty, uses esbuild's tsconfig.json and falls back to the tsconfig.json in the $cwd
  // tsconfig.base.json ?
  tsconfig?: string;
  // If empty, uses the current working directory
  // monorepo 下的cwd表现？
  cwd?: string;
  // If true, force compilation with tsc
  force?: boolean;
}

const theFinder = new RegExp(
  /((?<![(\s]\s*['"])@\w*[\w\d]\s*(?![;])[((?=\s)])/
);

const findDecorators = (fileContent: string) =>
  theFinder.test(stripComments(fileContent));

export type PluginOptions = Record<string, unknown>;

export const esbuildPluginTsc = (options: EsbuildTSCOptions = {}): Plugin => ({
  name: 'esbuild-tsc',
  setup(build) {
    const tsconfigPath =
      options.tsconfig ??
      build.initialOptions?.tsconfig ??
      path.join(process.cwd(), './tsconfig.json');

    const forceTsc = options.force ?? false;

    let parsedTsConfig = null;

    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      if (!parsedTsConfig) {
        parsedTsConfig = parseTsConfig(tsconfigPath, process.cwd());

        if (parsedTsConfig.sourcemap) {
          parsedTsConfig.sourcemap = false;
          parsedTsConfig.inlineSources = true;
          parsedTsConfig.inlineSourceMap = true;
        }
      }

      // Just return if we don't need to search the file.
      // 如果没有强制使用tsc 且tsconfig中没有emitDecoratorMetadata 说明不需要编译
      if (
        !forceTsc &&
        (!parsedTsConfig ||
          !parsedTsConfig.options ||
          !parsedTsConfig.options.emitDecoratorMetadata)
      ) {
        return;
      }

      const ts = await fs
        .readFile(args.path, 'utf8')
        .catch((err) => printDiagnostics({ file: args.path, err }));

      // Find the decorator and if there isn't one, return out
      const hasDecorator = findDecorators(ts as string);
      console.log('hasDecorator: ', hasDecorator);
      if (!hasDecorator) {
        return;
      }

      const program = transpileModule(ts as string, parsedTsConfig);
      return { contents: program.outputText };
    });
  },
});

function parseTsConfig(tsconfigPath: string, cwd = process.cwd()) {
  const fileName = findConfigFile(cwd, sys.fileExists, tsconfigPath);
  console.log('fileName: ', fileName);

  // if the value was provided, but no file, fail hard
  if (tsconfigPath !== undefined && !fileName)
    throw new Error(`failed to open '${fileName}'`);

  let loadedConfig = {};
  let baseDir = cwd;
  let configFileName: string;

  if (fileName) {
    const text = sys.readFile(fileName);
    if (text === undefined) throw new Error(`failed to read '${fileName}'`);

    const result = parseConfigFileTextToJson(fileName, text);

    if (result.error !== undefined) {
      printDiagnostics(result.error);
      throw new Error(`failed to parse '${fileName}'`);
    }

    loadedConfig = result.config;
    baseDir = path.dirname(fileName);
    configFileName = fileName;
  }

  const parsedTsConfig = parseJsonConfigFileContent(loadedConfig, sys, baseDir);

  if (parsedTsConfig.errors[0]) printDiagnostics(parsedTsConfig.errors);

  return parsedTsConfig;
}

function printDiagnostics(...args) {
  console.log(inspect(args, false, 10, true));
}
