/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    goldenRatio: {
      prefix: true,
    },
    fontSize: {
      sm: "1rem",
      base: "1.618rem",
      lg: "2.618rem",
      "2xl": "4.236rem",
      "3xl": "6.854rem",
      "4xl": "11.089rem",
      "5xl": "17.942rem",
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-golden-ratio")],
};
