import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lilita One", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
      // colors: {
      //   "primary": "#00AB8F",
      //   "primary": "#e0e0e0",
      //   "primary": "#78ef6b",
      //   primaryLight: "#FFFADE",
      //   secondary: "#274C43",
      // },
      // colors: {
      //   "primary": "#e9e9e9",
      //   "primary": "#B9CCC2",
      //   "primary": "#2f4937",
      //   primaryLight: "#FCFCFC",
      //   secondary: "#213027",
      //   highlight: "#FFC619",
      // },
      // colors: {
      //   "primary": "#F1F199",
      //   "primary": "#00DDFF",
      //   "primary": "#FF89D2",
      //   primaryLight: "#FFFFFF",
      //   secondary: "#000000",
      // },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
} satisfies Config;
