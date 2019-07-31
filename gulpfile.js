const {task, src} = require('gulp');
const del = require('del');

const packages = [
  'harmony-core',
  'harmony-crypto',
  'harmony-account',
  'harmony-network',
  'harmony-contract',
  'harmony-utils',
  'harmony-transaction',
];

task('cleanBrowser', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/lib`;
    return del.sync([pathToLib]);
  });
});

task('cleanServer', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/dist`;
    return del.sync([pathToLib]);
  });
});

task('cleanUnexpected', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/tsconfig.tsbuildinfo`;
    return del.sync([pathToLib]);
  });
});

task('cleanDocs', async () => {
  await packages.map((p) => {
    const pathToLib = `packages/${p}/doc`;
    return del.sync([pathToLib]);
  });
});
