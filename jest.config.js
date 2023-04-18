export default {
    testEnvironment: 'jsdom',
    testMatch: [
      '**/__test__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };