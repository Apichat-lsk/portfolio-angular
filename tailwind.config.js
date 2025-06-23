/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // สำคัญมาก สำหรับ Angular ต้องรวมทั้ง .html และ .ts
  ],
  theme: {
    extend: {
      colors: {
        background: "#282C33",
        glow: "#C778DD",
        secondary: "#ABB2BF",
      },
      translate: {
        "10/12": "83.333333%",
      },
    },
  },
  plugins: [],
};
