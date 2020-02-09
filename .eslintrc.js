module.exports = {
  extends: ['plugin:react/recommended', '@sub-tv/eslint-config'],
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
  },
};
