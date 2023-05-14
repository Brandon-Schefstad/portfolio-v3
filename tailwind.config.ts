import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lilita One", ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   "accent-1": "#A7AABD",
      //   "accent-2": "#EC556B",
      //   "accent-3": "#000000",
      //   primary: "#E7DBD1",
      //   secondary: "#07327A",
      // },
      // colors: {
      //   "accent-1": "#00AB8F",
      //   "accent-2": "#e0e0e0",
      //   "accent-3": "#78ef6b",
      //   primaryLight: "#FFFADE",
      //   secondary: "#274C43",
      // },
      colors: {
        "accent-1": "#1010a3",
        "accent-2": "#e0e0e0",
        "accent-3": "#f7f7f7",
        primaryLight: "#FFFFFF",
        secondary: "#000000",
      },
      // colors: {
      //   "accent-1": "#F1F199",
      //   "accent-2": "#00DDFF",
      //   "accent-3": "#FF89D2",
      //   primaryLight: "#FFFFFF",
      //   secondary: "#000000",
      // },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
} satisfies Config;
