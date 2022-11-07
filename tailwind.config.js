/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js.ts.jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.red,
      secondary: colors.orange,
      darkred: '#8B0000',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      darkbg: '#242424',
      lightbg: '#E6D5B8',
    },
    extend: {},
  },
  plugins: [],
}
