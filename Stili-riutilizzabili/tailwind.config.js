/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    colors: {
      primary:'#8A2BE2',

    },
    extend: {
      padding: {
        'custom': '2.5rem',
        '5xl': '6rem'
      },
    },
  },
  plugins: [],
}

