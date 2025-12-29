/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      colors: {
        gold: "#d97706",
        dark: "#09090b",
        dark2: "#18181b",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
