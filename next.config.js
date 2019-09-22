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
  // exportPathMap: async function(
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/readme.md': { page: '/readme' },
  //     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   };
  // },
});

exports.pathMap;
