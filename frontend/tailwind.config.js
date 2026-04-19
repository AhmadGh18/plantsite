module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        muted: "var(--color-muted)",
        bgprimary: "var(--color-bgprimary)",
      },
      fontFamily: {
        mainfont: ["Signika Negative", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
