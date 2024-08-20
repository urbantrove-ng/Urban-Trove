/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryOne: "#7e5e3f",
        primaryTwo: "#808000",
        white: "#fff",
        black: "#333",
        footer: "#9ca3af",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
