const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const webpackConfig = config => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'frontmatter-markdown-loader',
  });

  return config;
};

module.exports = withPlugins([[withCSS, {}]], {
  webpack: webpackConfig,
});

exports.pathMap;
