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
          "0": "#F8F9FA",
          "50": "#E9ECEF",
          "100": "#DEE2E6",
          "200": "#CED4DA",
          "300": "#ADB5BD",
          "400": "#8F979E",
          "500": "#6C757D",
          "600": "#495057",
          "700": "#343A40",
          "800": "#212529",
          "900": "#121416",
          "1000": "#0A0C0D",
        },
      }
    },
  },
  plugins: [],
};
export default config;
