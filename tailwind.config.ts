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
        background: "#fdf9f7",
        foreground: "#261c0e",
        "cream-light": "#fff9f5",
        "gray-50": "#faf8f6",
        "gray-100": "#f5f2f0",
        "text-light": "#6e473b",
        charcoal: "#261c0e",
        brown: "#6e473b",
        tan: "#a78d78",
        sage: "#beb5a9",
        cream: "#e1d4c2",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        lora: ["var(--font-lora)"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
