export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f49bd",
        secondary: "#E8EAE6",
        accent: "#D6CFC7",
        "background-light": "#F9FAF8",
        "background-dark": "#101622",
        surface: "#ffffff",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
