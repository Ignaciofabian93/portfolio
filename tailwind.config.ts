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
        gray: {
          DEFAULT: "#c3c7d6",
          100: "#212431",
          200: "#424961",
          300: "#636d92",
          400: "#9299b5",
          500: "#c3c7d6",
          600: "#ced2de",
          700: "#dbdde6",
          800: "#e7e8ee",
          900: "#f3f4f7",
        },
        light: {
          DEFAULT: "#dee5fc",
          100: "#081a57",
          200: "#1035ae",
          300: "#315cec",
          400: "#88a1f4",
          500: "#dee5fc",
          600: "#e5eafd",
          700: "#ebf0fd",
          800: "#f2f5fe",
          900: "#f8fafe",
        },
        tertiary: {
          DEFAULT: "#434757",
          100: "#0d0e11",
          200: "#1b1c23",
          300: "#282a34",
          400: "#353845",
          500: "#434757",
          600: "#62677f",
          700: "#868ca2",
          800: "#aeb2c1",
          900: "#d7d9e0",
        },
        secondary: {
          DEFAULT: "#6a88eb",
          100: "#08143c",
          200: "#102978",
          300: "#193db4",
          400: "#2f59e3",
          500: "#6a88eb",
          600: "#89a0ef",
          700: "#a6b8f3",
          800: "#c4d0f7",
          900: "#e1e7fb",
        },
        primary: {
          DEFAULT: "#172a66",
          100: "#050815",
          200: "#09112a",
          300: "#0e193e",
          400: "#132253",
          500: "#172a66",
          600: "#2644a6",
          700: "#4466d5",
          800: "#8299e3",
          900: "#c1ccf1",
        },
      },
    },
  },
  plugins: [],
};
export default config;
