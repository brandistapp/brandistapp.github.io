const { defineConfig } = require('windicss/helpers');
const formsPlugin = require('windicss/plugin/forms');

// TODO: Define theme.

module.exports = defineConfig({
  darkMode: 'class',
  extract: {
    include: ['*.html'],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
      '_site/**/*'
    ]
  },
  plugins: [
    formsPlugin
  ]
});
