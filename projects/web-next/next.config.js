const path = require('path');

module.exports = {
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@types-api': path.resolve(__dirname, './src/types/api/index.ts'),
      '@types-app': path.resolve(__dirname, './src/types/index.ts'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@styles': path.resolve(__dirname, './src/styles'),
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/uses',
        destination: '/uses/en',
        permanent: false,
      },
    ];
  },
};
