/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        darkmode: "#0D0D0D",
        primary: "#191919",
        secondary: "#F54748",
        tertiary: "#FDC55E",
        amberGlow: "#F6AA1C",
      },
    },
  },
  plugins: [],
};
