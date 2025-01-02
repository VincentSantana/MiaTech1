/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        'primo': '#7FFF00',
        'secondo': '#B8860B',
        'terzo': '#A9A9A9',
        'quarto': '#9932CC',
      },

      fonts: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

