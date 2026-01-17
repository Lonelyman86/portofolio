/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matcha: "#88A976",
        milk: "#FEFCF5",
        cosmic: "#0F1218",
      },
    },
  },
  plugins: [],
};
