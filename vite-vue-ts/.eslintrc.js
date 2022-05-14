module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: {},
};
