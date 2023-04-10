module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  rules: {
    'default-param-last': 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-one-expression-per-line': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
