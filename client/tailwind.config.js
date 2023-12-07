/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      colors: {
        primaryOne: "#7e5e3f",
        primaryTwo: "#808000",
        white: "#fff",
        black: "#333",
        footer: "#9ca3af"
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ["Raleway", 'sans-serif'],
        roboto: ["Roboto Condensed", "sans-serif"]
      },
      boxShadow: {
        '1xl': '0 5px 15px #737373',
        '2xl': '0 5px 5px #333',
        '3xl': '0 2px 5px #333;'
      }
    },
  },
  plugins: [],
};
