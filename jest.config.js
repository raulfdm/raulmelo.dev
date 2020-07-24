// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleDirectories: [
    'node_modules',
    'src',
    'src/utils',
    'src/context',
    'src/components',
    'types/',
    __dirname,
  ],
  moduleNameMapper: {
    '^@screens/(.*)': '<rootDir>/src/screens/$1',
  },
  modulePaths: ['<rootDir>/context'],
  setupFilesAfterEnv: ['./src/setupTest.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)', '**/__tests__/*.[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '.cache', '.history'],
};
