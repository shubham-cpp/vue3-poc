/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
        mono: ['Oxygen Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        darkPrimary: '#3b3b3b',
        darkSecondary: '#4a4a4a'
      }
    }
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')]
}
