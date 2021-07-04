import { a } from './a';
import { b } from './b';
import chalk from 'chalk';
// import { version } from "./package.json";
// import jquery from "jquery";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cjs = require('./cjs');

function main() {
  console.log(a());
  console.log(cjs());
  // console.log(chalk.green("version: ", version));
  // console.log(jquery.ajax());
}

main();
