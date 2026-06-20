import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F4EE",
          deep: "#EDE6D8",
          dim: "#E4DBC9",
        },
        ink: {
          DEFAULT: "#191510",
          soft: "#564E43",
          faint: "#8C8478",
        },
        indigo: {
          DEFAULT: "#202A57",
          deep: "#141A38",
          bright: "#39457E",
        },
        ochre: {
          DEFAULT: "#C18A2B",
          soft: "#E7C77C",
          deep: "#9A6B17",
        },
        madder: "#9C3B22",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderColor: {
        line: "rgba(25,21,16,0.14)",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
