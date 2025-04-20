import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest', // Add this line for JavaScript files
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-router-dom|some-other-package-you-want-to-transform)',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};


export default config;


