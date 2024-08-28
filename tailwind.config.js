/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        'secondary': "var(--secondary)",
        'text-color': "var(--text)",
        'text-color': "var(--text)",
        "snow": {
          100: '#d8dee9',
          200: '#e5e9f0',
          300: '#eceff4',
        },
        night: {
          100: "#2e3440",
          200: "#3b4252",
          300: "#434c5e",
          400: "#4c566a",
        },
        "frost": {
          100: "#8fbcbb",
          200: "#88c0d0",
          300: "#81a1c1",
          400: "#5e81ac",
        },
        "aurora": {
          100: "#bf616a",
          200: "#d08770",
          300: "#ebcb8b",
          400: "#a3be8c",
          500: "#b48ead",
        }
      },
    },
  },
  plugins: [],
}