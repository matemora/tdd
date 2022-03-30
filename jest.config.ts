/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: [
    "**/tests/**/*.(spec|test).ts"
  ],
  coverageProvider: "v8",

};
