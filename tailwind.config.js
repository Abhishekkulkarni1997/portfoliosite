/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  /* content: ["./src/Components/*.{html,css, js, jsx}"], */
  content: [join(__dirname, "./src/components/**/*.jsx")],

  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
