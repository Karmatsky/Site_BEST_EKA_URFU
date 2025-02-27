/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  
  theme: {
    extend: {'sans': ['Montserrat', 'sans-serif'],},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}



