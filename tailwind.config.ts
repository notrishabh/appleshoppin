import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryhover: "var(--primary-hover)",
      },
      fontSize: {
        subtitle: "21px",
        heading: "64px",
      },
      letterSpacing: {
        tighter: "-0.011em",
        tighest: "-0.009em",
      },
      lineHeight: {
        none: "1.0625",
      },
      fontFamily: {
        sftext: ["var(--font-sf-text)", "sans-serif"],
        sfdisplay: ["var(--font-sf-display)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        openoptions: {
          "0%": {
            maxWidth: "34px",
            clipPath: "inset(0 100% 0 0)",
            overflow: "hidden",
          },
          "90%": { maxWidth: "500px", clipPath: "inset(0 0 0 0)" },
          "100%": {
            maxWidth: "100%",
            clipPath: "inset(0 0 0 0)",
            overflow: "visible",
          },
        },
        expandAndCollapse: {
          "0%": { maxWidth: "34px" },
          "50%": { maxWidth: "500px" },
          "100%": { maxWidth: "34px" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        openoptions: "openoptions 1.1s ease forwards",
        expandAndCollapse: "expandAndCollapse 1.75s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
