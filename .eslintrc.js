module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import', 'prettier', '@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    camelcase: 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'import/no-named-as-default': 0,
    'import/no-self-import': 0,
    'import/prefer-default-export': 0,
    'no-mixed-operators': 1,
    'no-param-reassign': 1,
    'no-underscore-dangle': 0,
    'prefer-destructuring': [
      2,
      {
        array: false,
        object: true,
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
