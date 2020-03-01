module.exports = {
  overrides: [
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
        'react/prop-types': 0,
        '@typescript-eslint/ban-ts-ignore': 'warn',
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
      },
    },
  ],
};
