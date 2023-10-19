/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js.ts.jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
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
      synthpink: '#F052B9',
      synthmid: '#9E2EBE',
      synthblue: '#4E52D7'
    },
    extend: {
      maxHeight: {
        '90vh': '90vh',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '70%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'gradientX': 'gradientX 2s ease infinite',
        'gradientXreverse': 'gradientX 2s ease infinite reverse',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
