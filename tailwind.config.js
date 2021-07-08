const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      sans: ['Times New Roman'],
      serif: ['Times New Roman'],
    },
    extend: {
      colors: {
        'shitty-gold': '#a05211',

        // p150
        'submit': '#a05211',
        'cancel': '#ffeed6',
        'table-header': '#ffe45c',
        'table-striped-row-odd': '#ffffff',
        'table-striped-row-even': '#ffeed6',
        'table-row-hover': '#fff0a5',
        'table-cell-border': '#ce9720',

        // p100
        // 'submit': '#407392',
        // 'cancel': '#c5dbec',
        // 'table-header': '#c8ebfe',
        // 'table-striped-row-odd': '#ffffff',
        // 'table-striped-row-even': '#f0fdff',
        // 'table-row-hover': '#dce8ff',
        // 'table-cell-border': '#a3c2d4',
      },
    },
  },
};
