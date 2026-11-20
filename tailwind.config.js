/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        basit: "black",
        secondary: "#facc15",
        zain: "#80aa2c",
        olivie: "#6B8E23",
        primary: "#2563eb",
      },
      screens: {
        ssm: "30rem",
        laptop: "1024px",
        desktop: "1280px",
        wide: "1536px",
        xm: "112rem",
      },
    },
  },
  plugins: [],
}; 



