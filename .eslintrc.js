module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'airbnb-typescript/base',
  ],
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'import/prefer-default-export': [0],
  },
};
