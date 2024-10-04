/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        "custom-yellow": "#DFFF00",
        "hero-bg": "#000", // Black background for hero section
        "hero-text": "#dfff00", // Yellow text for hero section
        "custom-bg": "#CEA5AD", // Custom background for content section
      },
      fontFamily: {
        "dela-gothic": ["Dela Gothic One", "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      fontSize: {
        "hero-large": "3.5rem",
        "hero-medium": "2.5rem",
        "hero-small": "1.8rem",
      },
      spacing: {
        "hero-padding": "2rem",
        "hero-padding-sm": "1.5rem",
        "hero-padding-xs": "1rem",
      },
      zIndex: {
        hero: "1",
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
      },
    },
    plugins: [],
  },
};