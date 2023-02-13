module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // Default settings
    'plugin:jsx-a11y/recommended', // Accesibility plugin
    'plugin:prettier/recommended', // Prettier
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    semi: ['error', 'always'], // Require semicolon
  },
};
