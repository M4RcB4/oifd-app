module.exports = {
    extends: ['react-app', 'prettier', 'cypress'],
    plugins: ['prettier', 'jest'],
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      'jest/globals': true,
    },
    settings: {
      react: {
        version: 'latest',
      },
    },
    rules: {
      'prettier/prettier': 'warn',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error'
    },
  };