module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/no-v-html': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
