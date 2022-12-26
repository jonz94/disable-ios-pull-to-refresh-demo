/** @type {import('prettier').Config} */
module.exports = {
  bracketSameLine: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 120,

  pluginSearchDirs: false,
  plugins: [require('prettier-plugin-packagejson'), require('prettier-plugin-astro')],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
