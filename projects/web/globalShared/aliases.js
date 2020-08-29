const path = require('path');

const webpackAliases = {
  '@app-types': path.resolve(__dirname, '../src/types'),
  '@components': path.resolve(__dirname, '../src/components'),
  '@config': path.resolve(__dirname, `../src/config`),
  '@contexts': path.resolve(__dirname, '../src/contexts'),
  '@hooks': path.resolve(__dirname, '../src/hooks'),
  '@locales': path.resolve(__dirname, '../src/locales'),
  '@models': path.resolve(__dirname, '../src/models'),
  '@screens': path.resolve(__dirname, `../src/screens`),
  '@static': path.resolve(__dirname, '../static'),
  '@styles': path.resolve(__dirname, '../src/styles'),
  '@utils': path.resolve(__dirname, '../src/utils'),
  '@stores': path.resolve(__dirname, '../src/stores'),
  '@globalShared': path.resolve(__dirname, './'),
};

module.exports = {
  webpackAliases,
};
