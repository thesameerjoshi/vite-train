/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light': {
          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
          'white': '#ffffff',
          'tahiti': {
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
          },
        },
        'dark': {
          'black': '#000000',
          'lime': '#00ff00',
          'teal': '#ccfbf1',
          'midnight': '#121063',
        },
        'nord': {
          'polar-night': {
            50: '#2e3440',
            100: '#3b4252',
            200: '#434c5e',
            300: '#4c566a',
          },
          'snow-storm': {
            50: '#d8dee9',
            100: '#e5e9f0',
            200: '#eceff4',
          },
          'frost': {
            50: '#8fbcbb',
            100: '#88c0d0',
            200: '#81a1c1',
            300: '#5e81ac',
          },
          'aurora': {
            50: '#bf616a',
            100: '#d08770',
            200: '#ebcb8b',
            300: '#a3be8c',
            400: '#b48ead',
          },
        },
      },
    },
  },
  plugins: [],
}