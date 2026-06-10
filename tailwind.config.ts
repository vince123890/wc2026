import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pitch: {
          950: "#07120c",
          900: "#0a1a10",
          800: "#0f2417",
          700: "#16331f",
          line: "#1e4128",
        },
        gold: { DEFAULT: "#e8b54a", dim: "#a8843a" },
        ink: { hi: "#f2efe6", mid: "#b8c4ae", low: "#6e7f68" },
        live: "#ff4d5e",
        win: "#4ade80",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        num: ["var(--font-num)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
