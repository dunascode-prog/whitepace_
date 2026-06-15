import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_1: "#043873",
        primary_2: "#4F9CF9",
        secondary_1: "#FFE492",
        secondary_2: "#A7CEFC",
        secondary_3: "#FFFFFF",
        secondary_4: "#212529",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },

      fontSize: {
        h1: ["59px", { lineHeight: "82px", fontWeight: "700" }],
        h2: ["51px", { lineHeight: "72px", fontWeight: "700" }],
        h3: ["42px", { lineHeight: "60px", fontWeight: "600" }],
        h4: ["23px", { lineHeight: "37px", fontWeight: "600" }],
        h5: ["15px", { lineHeight: "31px" }],

        "p1-semibold": [
          "16px",
          {
            lineHeight: "34px",
            fontWeight: "600",
          },
        ],

        "p1-regular": [
          "17px",
          {
            lineHeight: "29px",
            fontWeight: "400",
          },
        ],
        "p1-bold": [
          "17px",
          {
            lineHeight: "29px",
            fontWeight: "700",
          },
        ],

        "p2-bold": [
          "11px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],

        "p2-medium": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],

        "p2-regular": [
          "12px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],

        "p3-medium": [
          "9px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],

        "p3-regular": [
          "9px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
      letterSpacing: {
        lsh1: "-0.02em",
        lsh2: "-0.02em",
        lsh3: "-0.02em",
        lsh4: "-0.02em",
        lsh5: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
