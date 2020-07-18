module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      [
        'babel-plugin-styled-components',
        {
          pure: true,
        },
      ],
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
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
