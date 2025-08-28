/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // <-- This line is CRUCIAL
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}