import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // dark/light mode via class
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("light", ".light &");
    },
  ],
};

export default config;
