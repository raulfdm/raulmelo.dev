module.exports = ({ config }) => {
  config.resolve.mainFields = ['browser', 'module', 'main'];

  config.module.rules.push({
    test: /\.(ts|tsx|js)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        require.resolve('babel-plugin-remove-graphql-queries'),
      ],
    },
    exclude: [/node_modules/],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
