import eslintPluginAstro from 'eslint-plugin-astro'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
