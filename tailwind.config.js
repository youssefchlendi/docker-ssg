/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "639px",
      lg: "767px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "2160px",
      paper: "8.5in",
      print: {
        raw: "print",
      },
    },
    extend: {
      colors: {
        ivory: "#fffffd",
      },
      fontFamily: {
        serif: [
          "Bitter",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
      fontSize: {
        "7xl": "5rem",
      },
      scale: {
        120: "1.2",
        140: "1.4",
        160: "1.6",
      },
    },
  },
  variants: ["responsive", "hover", "focus", "active", "visited"],
  plugins: [],
};
