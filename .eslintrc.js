module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["prettier", "jest"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      version: "999.999.999",
    },
  },
  rules: {
    "prettier/prettier": "warn",
  },
};
