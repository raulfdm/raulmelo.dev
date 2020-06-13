module.exports = {
  overrides: [
    {
      files: ['*.js'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:react/recommended', '@sub-tv/eslint-config'],
      plugins: ['react-hooks', 'emotion'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      env: {
        browser: true,
      },
      rules: {
        'react/prop-types': 'off',
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
      },
    },
    {
      files: ['*.js'],
      env: {
        node: true,
      },
      extends: ['eslint:recommended'],
      parser: 'babel-eslint',
    },
    {
      files: ['*.test.*'],
      env: {
        jest: true,
        es6: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  ignorePatterns: ['*.d.ts'],
};
