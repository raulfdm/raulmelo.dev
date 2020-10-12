const { webpackAliases } = require('../globalShared/aliases');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: async (options) => {
    options.plugins.push('babel-plugin-remove-graphql-queries');

    return options;
  },
  webpackFinal: async (config) => {
    /**
     * https://www.gatsbyjs.com/docs/visual-testing-with-storybook/
     */
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    /* Code to enable my custom aliases (e.g. @screen, @styles, etc.) */
    config.resolve.alias = { ...config.resolve.alias, ...webpackAliases };

    return config;
  },
};
