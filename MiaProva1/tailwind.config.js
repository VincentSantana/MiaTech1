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
      }
    },
  },
  plugins: [],
}

// ogni volta che modifico i css, aggiorno la pagina con il comando npx tailwindcss -i ./src/input.css -o ./src/output.css --watch //