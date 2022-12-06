/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#ddd",
        "dark-gray": "#a7a7a7",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
