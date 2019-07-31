// tslint:disable-next-line: no-var-requires
const path = require('path');
// tslint:disable-next-line: no-implicit-dependencies no-var-requires
const {Application} = require('typedoc');
// tslint:disable-next-line: no-implicit-dependencies no-var-requires
const arg = require('arg');

const args = arg({
  '--pkgPath': String,
  '-p': '--pkgPath',
  '--pkgSrc': String,
  '-s': '--pkgSrc',
  '--target': String,
  '-t': '--target',
});

const pkgSrc = args['--pkgSrc'];
const pkgPath = args['--pkgPath'];
const target = args['--target'];

const app = new Application({
  mode: 'file',
  tsconfig: `${pkgPath}/tsconfig.json`,
  theme: target === 'default' ? 'default' : 'markdown',
  plugin: path.resolve('node_modules/typedoc-plugin-markdown'),
  platform: target,
});

const files = [...app.expandInputFiles([pkgSrc])];

// // const project = app.convert();
const outputDir = `${pkgPath}/doc/${target}`;
// console.log({ttt, files, outputDir});
// // Rendered docs
app.generateDocs(files, outputDir);
