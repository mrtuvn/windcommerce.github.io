/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "custom-brown": "#44392e",
      white: "#fff",
      accent2: "#afa",
      accent3: "#333",
      main: {
        primary: "rgb(255,126,0)",
        orange: "#f57b20",
      },
    },
    extend: {
      width: {
        128: "32rem",
      },
      fontFamily: {
        sans: ["system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/line-clamp"),
  ],
};
