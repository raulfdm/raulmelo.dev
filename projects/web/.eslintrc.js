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
      plugins: ['react-hooks'],
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
        'jest/no-mocks-import': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
    {
      files: ['*.js'],
      env: {
        node: true,
        es6: true,
      },
      extends: ['eslint:recommended'],
      parser: 'babel-eslint',
    },
    {
      files: ['*.test.*', '**/__tests__/*.ts'],
      env: {
        jest: true,
        es6: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  ignorePatterns: ['*.d.ts'],
};
