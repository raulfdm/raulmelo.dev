// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  /* This fixes custom TS aliases imports while testing */
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)', '**/__tests__/*.[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '.cache', '.history', 'types/'],
};
