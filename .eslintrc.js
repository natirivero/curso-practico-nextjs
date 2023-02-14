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
    'prettier/prettier': 0, // ignore this rule
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
