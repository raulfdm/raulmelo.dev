// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  /* This fixes custom TS aliases imports while testing */
  moduleNameMapper: {
    '^@app-types': '<rootDir>/src/types/index.ts',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@config/(.*)': '<rootDir>/src/config/$1',
    '^@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@locales/(.*)': '<rootDir>/src/locales/$1',
    '^@models': '<rootDir>/src/models/index.ts',
    '^@screens/(.*)': '<rootDir>/src/screens/$1',
    '^@static/(.*)': '<rootDir>/static/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    /**
     * utils/test needs to become first because it solves index.ts
     * barrel imports
     */
    '^@utils/test': '<rootDir>/src/utils/test-utils.tsx',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@stores/(.*)': '<rootDir>/src/stores/$1',
    '^@globalShared/(.*)': '<rootDir>/globalShared/$1',
  },
  modulePaths: ['<rootDir>/context'],
  setupFilesAfterEnv: ['./src/setupTest.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)', '**/__tests__/*.[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '.cache', '.history', 'types/'],
};
