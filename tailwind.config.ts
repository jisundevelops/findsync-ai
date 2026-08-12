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
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        "surface-sunken": "var(--surface-sunken)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        slate: "var(--slate)",
        "slate-light": "var(--slate-light)",
        border: "var(--border)",
        "border-soft": "var(--border-soft)",
        blue: {
          DEFAULT: "var(--blue)",
          dark: "var(--blue-dark)",
        },
        violet: "var(--violet)",
        teal: {
          DEFAULT: "var(--teal)",
          dark: "var(--teal-dark)",
        },
        coral: {
          DEFAULT: "var(--coral)",
          dark: "var(--coral-dark)",
        },
        amber: {
          DEFAULT: "var(--amber)",
          dark: "var(--amber-dark)",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        base: ["15.5px", { lineHeight: "1.55" }],
      },
      letterSpacing: {
        heading: "-0.02em",
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        sm: "10px",
        full: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        blue: "0 4px 14px 0 rgba(59, 91, 255, 0.39)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #3B5BFF 0%, #7C5CFF 50%, #9B6BFF 100%)",
        "gradient-teal":
          "linear-gradient(135deg, #16C77A 0%, #0C8F53 100%)",
        "gradient-coral":
          "linear-gradient(135deg, #F76B77 0%, #E23B4C 100%)",
        "text-gradient":
          "linear-gradient(135deg, #3B5BFF 0%, #7C5CFF 50%, #9B6BFF 100%)",
      },
      width: {
        "sidebar-expanded": "264px",
        "sidebar-collapsed": "84px",
      },
      height: {
        topbar: "76px",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;