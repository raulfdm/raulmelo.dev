module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:react/recommended', '@sub-tv/eslint-config'],
      plugins: ['react-hooks'],
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
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      parser: 'babel-eslint',
      env: {
        node: true,
        browser: true,
      },
      rules: {
        'react/prop-types': 'warn',
      },
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
};
