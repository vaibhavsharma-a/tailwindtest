/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // This will match all .html files in src and its subdirectories
    "./src/**/*.{js,ts,vue}" // This matches js, ts, and vue files in src and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

