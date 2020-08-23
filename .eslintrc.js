/*eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  root:true,
  parserOptions: {
    parser:"babel-eslint"
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/no-multiple-template-root': "off",
    'vue/valid-template-root': "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline":"off",
    "vue/require-default-prop":"off",
    "vue/max-attributes-per-line": ["off", {
      "singleline": 2,
      "multiline": {
        "max": 2,
        "allowFirstLine": true
      }
    }]
  }
}