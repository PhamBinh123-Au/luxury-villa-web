import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        luxury: {
          50: "#fbfaf8",
          100: "#f5f3ee",
          200: "#ebe5dc",
          300: "#dcd1c2",
          400: "#c7b5a1",
          500: "#b59e87",
          600: "#9f836d",
          700: "#806856",
          800: "#695548",
          900: "#55463c",
          950: "#2d241f",
        },
        gold: {
          400: "#d4af37",
          500: "#c59b27",
          600: "#aa821b",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

