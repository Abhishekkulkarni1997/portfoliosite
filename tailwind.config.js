/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [join(__dirname, "./src/**/*.jsx")],
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
