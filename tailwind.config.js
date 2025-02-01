/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
      },
      colors: {
        lightBrown: "#9E7F66",
        darkBlack: "#111111",
        deepBlue: "#17192B",
        darkGray: "#242B37",
        mediumGray: "#5C6779",
      },
    },
  },
  plugins: [],
};
