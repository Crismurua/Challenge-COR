export default {
    testEnvironment: 'jsdom',
    testMatch: [
      '**/__test__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };