/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary1: "#4C4DDC",
      primary2: "#DFE0F3",
      primary3: "#3334CC",
    },
    container: {
      center: true,
      padding: {
        default: "20px",
        md: "50px",
      },
    },
  },
  plugins: [daisyui, require("flowbite/plugin")],
  daisyui: {
    themes: [],
  },
};
