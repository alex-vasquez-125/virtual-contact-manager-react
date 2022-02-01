module.exports = {
  setupFilesAfterEnv: ['./__tests__/setup-env.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
      "__tests__/setup-env.js",
      "__tests__/mocks/browser.js",
      "__tests__/mocks/handlers.js"],
  testTimeout: 10000000,
  verbose: true,
};
