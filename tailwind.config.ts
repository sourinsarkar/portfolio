import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: {
          "100": "#FFFFFF",
          "200": "#E6F9F1",
          "300": "#CCDED6",
          "400": "#B2C4BD",
          "500": "#99ABA4",
          "600": "#81928B",
          "700": "#6A7A73",
          "800": "#53635D",
          "900": "#3E4D47",
          "1000": "#293832",
        },
      },
    },
  },
  plugins: [],
};
export default config;
