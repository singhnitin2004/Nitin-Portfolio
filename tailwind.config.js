/** @type {import('tailwindcss').Config} */

const AnimateCSS = require('animated-tailwindcss');
module.exports = AnimateCSS({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
})
