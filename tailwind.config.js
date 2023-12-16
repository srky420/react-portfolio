/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*',
    './src/App.js'
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FE5F00',
        brown: '#6A5837',
        light: '#FFF',
        dark: '#23231A',
        grey: '#CCC'
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        raleway: 'Raleway, sans-serif'
      }
    },
  },
  plugins: [],
}

