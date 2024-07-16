import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gradientStart: "#d9a7c7", // Purple-pinkish
        gradientMiddle: "#fffcdc", // Whitish
        gradientEnd: "#a1c4fd", // Blueish

        "primary-background-color":
          "rgb(var(--primary-background-color) / <alpha-value>)",
        "secondary-background-color":
          "rgb(var(--secondary-background-color) / <alpha-value>)",
        "header-border-color":
          "rgb(var(--header-border-color) / <alpha-value>)",
        "header-text-color": "rgb(var(--header-text-color) / <alpha-value>)",

        "secondary-text-color":
          "rgb(var(--secondary-text-color) / <alpha-value>)",

        "primary-text-color": "rgb(var(--primary-text-color) / <alpha-value>)",

        "primary-button-color":
          "rgb(var(--primary-button-color) / <alpha-value>)",

        "primary-button-text-color":
          "rgb(var(--primary-button-text-color) / <alpha-value>)",

        "secondary-button-color":
          "rgb(var(--secondary-button-color) / <alpha-value>)",

        "secondary-button-text-color":
          "rgb(var(--secondary-button-text-color) / <alpha-value>)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
export default config;
