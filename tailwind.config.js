/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(from|to)-(green|sky|gray)-(800|500)/,
    },
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
