import colors from "tailwindcss/colors";
import { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xl: "1480px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
      },
      colors: {
        grayz: colors.zinc,
        accent: "#afa",
        brand: {
          DEFAULT: "#ff7e00",
          primary: "rgb(255,126,0)",
          orange: "#ff7e00",
          brown: "#44392e",
        },
      },
      width: {
        128: "32rem",
      },
      fontFamily: {
        sans: ["system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
} as Config;
