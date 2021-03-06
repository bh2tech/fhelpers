const base = require('../../jest.config.js')

module.exports = {
  ...base,
  displayName: 'DS',
  transformIgnorePatterns: ['node_modules/(?!.*?/es/.*\\.js)'],
  testMatch: ['<rootDir>/src/**/*.(spec|test).(tsx|jsx)'],
  collectCoverageFrom: [
    'src/**/*.{js, jsx, ts, tsx}',
    '!node_modules/**',
    '!src/index.ts',
    '!src/react-app-env.d.ts',
  ],
}
