const { defineConfig } = require('windicss/helpers');
const formsPlugin = require('windicss/plugin/forms');

// TODO: Define theme.
module.exports = defineConfig({
  darkMode: 'class',
  extract: {
    include: ['**/*.html'],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
      '_site/**/*'
    ]
  },
  theme: {
    extend: {
      colors: {
        'scarlet-gum': '#3f1467',
        'mint-green': '#99FF9C',
        'bay-leaf': '#7bb08b'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [
    formsPlugin
  ]
});
