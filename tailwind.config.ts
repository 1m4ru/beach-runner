import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";



const config: Config = {
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          primary: {
            DEFAULT: "#FFA500", // Laranja Beach Runner
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#FFD580",
            foreground: "#3A2E0F",
          },
          accent: {
            DEFAULT: "#FFB347",
            foreground: "#ffffff",
          },
          card: {
            DEFAULT: "#ffffff",
            foreground: "#1A1A1A",
          },
        },
        backgroundImage: {
          "beach-runner": "linear-gradient(to right, #FF7A00, #FFA800, #FFD56B)",
        },
        borderRadius: {
          xl: "1rem",
          "2xl": "1.25rem",
        },
        fontFamily: {
          sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        },
        boxShadow: {
          sm: "0 1px 2px rgba(0,0,0,0.05)",
          md: "0 4px 6px rgba(0,0,0,0.1)",
          lg: "0 8px 12px rgba(0,0,0,0.12)",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  
export default config
