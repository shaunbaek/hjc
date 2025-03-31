import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        matcha: {
          light: '#E0EAD7', // Light matcha green
          DEFAULT: '#B7D0A4', // Medium matcha green
          dark: '#8DAE77', // Darker matcha green for contrast
        },
        coffee: {
          light: '#E9DFD4', // Light coffee brown
          DEFAULT: '#C2A78F', // Medium coffee brown
          dark: '#9A8270', // Darker coffee brown for contrast
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
