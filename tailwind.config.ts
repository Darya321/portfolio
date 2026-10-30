import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Segoe UI", "sans-serif"],
      mono: ["Courier New", "monospace"]
    },
    extend: {
      colors: {
        paper: "#f3eee4",
        ink: "#20201d",
        muted: "#767168",
        line: "#d7cdbf"
      },
      screens: {
        xs: "360px"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
