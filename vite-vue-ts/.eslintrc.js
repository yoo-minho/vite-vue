module.exports = {
  //parser: 'vue-eslint-parser',
  //parserOptions: { parser: '@typescript-eslint/parser' },
  extends: ['plugin:vue/vue3-recommended', '@vue/typescript/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  root: true,
  rules: {},
};
