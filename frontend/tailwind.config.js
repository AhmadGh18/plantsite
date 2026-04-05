module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondprimary: "var(--color-secondprimary)",
        secondgreen: "var(--color-secondgreen)",
      },
      fontFamily: {
        mainfont: ["Signika Negative", "sans-serif"],
      },
    },
  },
  plugins: [],
};
