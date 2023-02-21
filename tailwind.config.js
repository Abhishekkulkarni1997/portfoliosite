/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: ["./src/components/**/*.jsx", "./public/index.html"],
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
