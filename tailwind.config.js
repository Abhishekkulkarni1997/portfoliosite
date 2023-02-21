/** @type {import('tailwindcss').Config} */
module.exports = {
  /* content: ["./src/Components/*.{html,css, js, jsx}"], */
  content: ["./src/components/**/*.jsx", "./public/index.html"],
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
