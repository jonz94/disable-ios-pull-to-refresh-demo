/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  printWidth: 120,

  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['tsconfig*.json', '.vscode/*.json'],
      options: {
        parser: 'jsonc',
      },
    },
  ],
}
