/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Geologica: '"Geologica"',
        Alex: '"Alex Brush", cursive',
      },
      screens: {
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
};
