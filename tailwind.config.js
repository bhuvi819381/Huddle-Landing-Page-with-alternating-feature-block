/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        paleCyan: "hsl(193, 100%, 96%)",
        darkCyan: "hsl(192, 100%, 9%)",
        grayishBlue: "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-desktop": "url('./images/bg-hero-desktop.svg')",
        "hero-mobile": "url('./images/bg-hero-mobile.svg')",
      }
    },
  },
  plugins: [],
};
