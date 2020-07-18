module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
    [
      'ramda',
      {
        useES: true,
      },
    ],
  ],
  env: {
    test: {
      presets: ['@babel/preset-typescript'],
      /* Cannot use ESM within node environment */
      plugins: ['ramda', 'babel-plugin-styled-components'],
    },
  },
};
