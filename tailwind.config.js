import colors from "./config/primevue/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "presets/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
