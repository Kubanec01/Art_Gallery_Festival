/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#F2E3D5",
        cremeWhite500: "#fcf3ecbe",
        cremeWhite: "#fcf3ec",
        customWhite: "#ffffffe9",
        shadowGrey: "#ffffff78",
        shadowGrey300: "#ffffff78",
      },
    },
  },
  plugins: [],
};
