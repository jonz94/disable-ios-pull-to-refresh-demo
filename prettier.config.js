/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  printWidth: 120,

  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['.vscode/*.json'],
      options: {
        parser: 'jsonc',
      },
    },
  ],
}
