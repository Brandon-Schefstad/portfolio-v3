import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   "accent-1": "#A7AABD",
      //   "accent-2": "#EC556B",
      //   "accent-3": "#000000",
      //   primary: "#E7DBD1",
      //   secondary: "#07327A",
      // },
      // colors: {
      //   "accent-1": "#00AB8F",
      //   "accent-2": "#C991FF",
      //   "accent-3": "#C9EF91",
      //   primaryLight: "#FFFADE",
      //   secondary: "#274C43",
      // },
      colors: {
        "accent-1": "#00AB8F",
        "accent-2": "#D891FF",
        "accent-3": "#C9EF91",
        primaryLight: "#FFFFFF",
        secondary: "#000000",
      },
      // colors: {
      //   "accent-1": "#F1F199",
      //   "accent-2": "#00DDFF",
      //   "accent-3": "#FF89D2",
      //   primary: "#FFFFFF",
      //   secondary: "#000000",
      // },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
} satisfies Config;
