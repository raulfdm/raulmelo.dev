const path = require('path');

module.exports = {
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@screens': path.resolve(__dirname, './src/screens'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@components': path.resolve(__dirname, './src/components'),
      '@app/types': path.resolve(__dirname, './src/types.ts'),
    };

    return config;
  },
};
