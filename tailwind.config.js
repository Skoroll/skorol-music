/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ajout des extensions pour les fichiers React
  theme: {
    extend: {
      colors: {
        textBase: "#d8d8d4",
        bgColor: "#303030",
        layoutColor: "#1f1f1f",
      }
    },
  },
  plugins: [],
};
