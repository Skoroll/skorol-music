/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ajout des extensions pour les fichiers React
  theme: {
    extend: {
      fontFamily:{
        montserra: ['Monserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        backgroundImage: {
          'drumKit': "url('./assets/drum-set-1839383_1280.jpg')"
        }
      },
      colors: {
        textBase: "#d8d8d4",
        bgColor: "#303030",
        bgCard: '#36454F',
        layoutColor: "#1f1f1f",
        bgOpacity: "#0303035d",
      }
    },
  },
  plugins: [],
};
