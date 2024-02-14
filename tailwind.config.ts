import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-m5": "linear-gradient(-5deg, var(--tw-gradient-stops))",
        "gradient-75": "linear-gradient(75deg, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "3/2": "3 / 2", // Define a custom ratio
      },
      plugins: [require("@tailwindcss/aspect-ratio")],
    },
  },
  fontFamily: {
    inter: ["Inter", "sans"],
  },
};
export default config;
