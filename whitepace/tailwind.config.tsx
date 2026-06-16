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
        h1: [
          "59px",
          { lineHeight: "64px", fontWeight: "700", letterSpacing: "0.02em" },
        ],
        h2: [
          "51px",
          { lineHeight: "56px", fontWeight: "700", letterSpacing: "-0.02em" },
        ],
        h3: ["42px", { lineHeight: "45px", fontWeight: "500" }],
        h4: ["23px", { lineHeight: "22px", fontWeight: "500" }],
        h5: ["15px", { lineHeight: "16px", fontWeight: "600" }],

        "p1-semibold": [
          "15px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],

        "p1-regular": [
          "15px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "p1-bold": [
          "15px",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],

        "p2-bold": [
          "13px",
          {
            lineHeight: "normal",
            fontWeight: "600",
          },
        ],

        "p2-medium": [
          "13px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "p2-medium-e": [
          "13px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],

        "p2-regular": [
          "13px",
          {
            lineHeight: "15px",
            fontWeight: "400",
          },
        ],

        "p3-medium": [
          "10px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],

        "p3-regular": [
          "10px",
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
      boxShadow: {
        "custom-offset": "15px 15px 50px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
