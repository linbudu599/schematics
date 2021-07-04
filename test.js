// var Table = require('cli-table3');
// var table = new Table({ head: ['Top Header 1', 'Top Header 2'] });

// table.push(
//   ['Value Row 1 Col 1', 'Value Row 1 Col 2'],
//   ['Value Row 2 Col 1', 'Value Row 2 Col 2']
// );

// console.log(table.toString());
const path = require('path');

console.log(path.isAbsolute('apps/nest-app/tsconfig.app.json'));
