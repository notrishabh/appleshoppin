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
    },
  },
  plugins: [],
} satisfies Config;
