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
      },
      fontFamily: {
        sans: "Braah One",
      },
    },
  },
  variants: {},
  plugins: [],
};
