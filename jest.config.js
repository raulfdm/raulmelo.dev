// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  /* This fixes custom TS aliases imports while testing */
  moduleNameMapper: {
    '^@screens/(.*)': '<rootDir>/src/screens/$1',
    '^@utils/test': '<rootDir>/src/utils/test-utils.tsx',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@config/(.*)': '<rootDir>/src/config/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '^@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@app-types': '<rootDir>/src/types/index.ts',
  },
  modulePaths: ['<rootDir>/context'],
  setupFilesAfterEnv: ['./src/setupTest.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)', '**/__tests__/*.[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '.cache', '.history'],
};
