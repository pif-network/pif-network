module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  rules: {
    'no-shadow': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    // a bit too fancy at this point
    'react/display-name': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
