/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [/(from|to)-(green|blue|gray)-(900|700)/],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
