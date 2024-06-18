import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Inria Serif", "serif"],
    },
    colors: {
      black: {
        DEFAULT: "#222222",
        100: "#070707",
        200: "#0d0d0d",
        300: "#141414",
        400: "#1b1b1b",
        500: "#222222",
        600: "#4e4e4e",
        700: "#7a7a7a",
        800: "#a6a6a6",
        900: "#d3d3d3",
      },
      white: {
        DEFAULT: "#ffffff",
        100: "#333333",
        200: "#666666",
        300: "#999999",
        400: "#cccccc",
        500: "#ffffff",
        600: "#ffffff",
        700: "#ffffff",
        800: "#ffffff",
        900: "#ffffff",
      },
      primary: {
        DEFAULT: "#1c5d99",
        100: "#06121e",
        200: "#0b253c",
        300: "#11375a",
        400: "#164979",
        500: "#1c5d99",
        600: "#267dcf",
        700: "#579ee0",
        800: "#8fbeea",
        900: "#c7dff5",
      },
      light: {
        DEFAULT: "#639fab",
        100: "#132023",
        200: "#264146",
        300: "#396169",
        400: "#4c828d",
        500: "#639fab",
        600: "#82b2bc",
        700: "#a2c5cd",
        800: "#c1d9dd",
        900: "#e0ecee",
      },
      grey: {
        DEFAULT: "#bbcde5",
        100: "#17273d",
        200: "#2e4f79",
        300: "#4576b6",
        400: "#80a2cf",
        500: "#bbcde5",
        600: "#cad8eb",
        700: "#d7e2f0",
        800: "#e4ecf5",
        900: "#f2f5fa",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
