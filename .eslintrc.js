module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    // 'linebreak-style': ['error', 'windows'],
  },
  globals: {
    window: true,
    module: true,
    gsap: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
};
