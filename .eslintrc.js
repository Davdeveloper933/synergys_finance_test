module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: [2, "always"],
    "vue/no-v-html": 0,
    "no-console": "off",
    "no-multiple-empty-lines": ["error", { max: 4 }]
  },
};
