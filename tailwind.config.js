/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        pri: "#09ccd0",
        sec: "#ff6f69",
      },
    },
  },
  plugins: [require("daisyui")],
};
