const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'brown': '#4f351e',
      'pink': '#b4866e',
      'pink-200': '#dfba9d',
      'red-100': '#bd8f77',
      'cyan': '#458e9d',
      'gray-dark': '#273444',
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
      'gray-light': '#d3dce6',
      'cyan-100': "#9eb3b8",
      'blue': "#20567a"

    },
    extend: {
      fontFamily: {
        'serif': ['Libre Bodoni'],
      },
    }
  },
}
