/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  darkMode: "class",
};
