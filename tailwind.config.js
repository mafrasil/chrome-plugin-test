/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1119",
        teal: "#17CFC4",
        purple: "#764AF4",
      },
      fontFamily: {
        helvetica: ["helvetica", "sans-serif"],
      },
      boxShadow: {
        "full": "0px 0px 20px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
}

