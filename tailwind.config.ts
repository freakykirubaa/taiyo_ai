/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1900px",
      },

      colors: {
        gray: "#888888",
        lightgray: "#2A2D35",
        grey: "#292C31",
        lightgrey: "#353535",
        blue: "#3861FB",
        silver: "#E4E4E4",
        ash: "#2A2D35",
        lightsilver: "#2A2D35",
        white: "#FFFFFF",
        lightblack: "#1E2329",
        black: "#000000",
        bgColor: "#141414",
        green: "#4C7C55",
        red: "#A64E4D",
        orange: "#C77616",
        yellow: "#C7C015",

        inputGray: "#353535",
        textGray: "#888888",

        Red: "#F6465D",

        primaryBlue: "[#4987EE]",
      },
    },
  },
  plugins: [],
};
