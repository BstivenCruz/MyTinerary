/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      colors: {
        botonR: "#E92C7C",
        fondoM: "#FADAFF",
        textos : "#7C7C7C",
        textos1 : "#1C1C1C" 
      },
      fontFamily: {
        sans: "Braah One ,sans",
        sans2: "Inter ,sans-serif"
      },
    },
  },
  variants: {},
  plugins: [],
};
