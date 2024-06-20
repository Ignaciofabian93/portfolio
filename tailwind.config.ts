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
      serif: ["Noto Serif", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          DEFAULT: "#f7f7f2",
          100: "#3d3d25",
          200: "#79794a",
          300: "#adad79",
          400: "#d2d2b6",
          500: "#f7f7f2",
          600: "#f9f9f5",
          700: "#fafaf7",
          800: "#fcfcfa",
          900: "#fdfdfc",
        },
        secondary: {
          DEFAULT: "#e4e6c3",
          100: "#3a3c19",
          200: "#747732",
          300: "#aeb34b",
          400: "#c9cc86",
          500: "#e4e6c3",
          600: "#e9ebce",
          700: "#eff0da",
          800: "#f4f5e7",
          900: "#fafaf3",
        },
        primary: {
          DEFAULT: "#899878",
          100: "#1b1f18",
          200: "#373d2f",
          300: "#525c47",
          400: "#6d7a5e",
          500: "#899878",
          600: "#a0ac93",
          700: "#b8c0ae",
          800: "#cfd5c9",
          900: "#e7eae4",
        },
        background: {
          DEFAULT: "#222725",
          100: "#070807",
          200: "#0d0f0e",
          300: "#141716",
          400: "#1b1f1d",
          500: "#222725",
          600: "#4a5551",
          700: "#73847d",
          800: "#a1ada9",
          900: "#d0d6d4",
        },
        dark: {
          DEFAULT: "#121113",
          100: "#040304",
          200: "#070708",
          300: "#0b0a0b",
          400: "#0e0d0f",
          500: "#121113",
          600: "#413d45",
          700: "#716a77",
          800: "#a09aa6",
          900: "#d0cdd2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
