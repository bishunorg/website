import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'no-console': 'warn',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
)
