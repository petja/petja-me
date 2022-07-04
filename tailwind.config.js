/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out 1",
        fadeInDown: "fadeInDown 0.5s ease-out 1",
      },
      keyframes: {
        fadeInUp: {
          "0%": { transform: "translate(0, 2em)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
        fadeInDown: {
          "0%": { transform: "translate(0, -2em)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
