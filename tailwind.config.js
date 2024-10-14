/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkmode: "#0D0D0D",
        primary: "#191919",
        secondary: "#F54748",
        tertiary: "#FDC55E",
      },
    },
  },
  plugins: [],
};
