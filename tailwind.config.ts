import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-main": "#7000DF",
        "purple-light": "#AE5FFD"
      }
    },
  },
  plugins: [],
} satisfies Config;
