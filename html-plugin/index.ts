import type { Plugin } from 'esbuild';
import type { Option } from './normalize-option';
import { normalizeOption } from './normalize-option';
import fs from 'fs-extra';
import path from 'path';
import pretty from 'pretty';

export function esbuildHtmlPlugin(options: Option = {}): Plugin {
  const normalizeOptions = normalizeOption(options);

  const {
    title,
    fileName,
    templatePath,
    inject,
    scriptLoading,
    favicon,
    meta,
  } = normalizeOptions;

  return {
    name: 'html',
    async setup(build) {
      // TODO: handle outfile / outdir case
      const { outfile, outdir, bundle } = build.initialOptions;

      const outFileName = path.basename(outfile);
      const outFileDir = path.dirname(outfile);
      const outHtmlPath = path.resolve(outFileDir, fileName);

      const scriptReplaceContent = `
      <body>
        <script ${
          scriptLoading === 'defer' ? 'defer' : ''
        } src="./${outFileName}"></script>
      </body>`;

      const htmlText = fs
        .readFileSync(templatePath, 'utf8')
        .replace('<body></body>', scriptReplaceContent);

      fs.writeFileSync(outHtmlPath, pretty(htmlText));
    },
  };
}
