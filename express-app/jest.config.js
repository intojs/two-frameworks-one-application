module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/tests/**/*.tests.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/main/**/*.ts',
    '!<rootDir>/src/main/main.ts'
  ],
  setupFiles: ['<rootDir>/src/tests/setup.ts']
};
