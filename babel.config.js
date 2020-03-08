module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: ['babel-plugin-styled-components'],
  env: {
    test: {
      presets: ['@babel/preset-typescript'],
    },
  },
};
