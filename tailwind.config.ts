import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        neutral: {
          50: "#f9fafb",
          100: "#f2f4f7",
          200: "#e5e7eb",
          300: "#d2d6dc",
          400: "#9fa6b2",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2933",
          900: "#111827"
        }
      }
    }
  },
  plugins: []
};

export default config;
