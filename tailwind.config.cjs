/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003B64",
          dark: "#003B64",
          light: "#0B5A87",
          50: "#F4F8FB",
          100: "#DCEAF2",
        },
        accent: {
          DEFAULT: "#F2994A",
          dark: "#A94F16",
          hover: "#E98B3F",
          soft: "#FFF1E6",
        },
        orange: {
          DEFAULT: "#F2994A",
          dark: "#E98B3F",
          light: "#FFF1E6",
        },
        crm: {
          sidebar: "#003B64",
          "sidebar-hover": "#0B5A87",
          "sidebar-active": "#002F50",
          orange: "#F2994A",
          "orange-muted": "#FFF1E6",
          border: "#0B5A87",
        },
        cta: {
          DEFAULT: "#F2994A",
          dark: "#E98B3F",
        },
        success: {
          DEFAULT: "#22C55E",
          dark: "#16A34A",
        },
        ink: "#1E2937",
        muted: "#475569",
        surface: "#F7F8FA",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Satoshi", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,59,100,0.04), 0 12px 24px -8px rgba(0,59,100,0.08)",
        "card-lg": "0 2px 4px rgba(0,59,100,0.05), 0 24px 48px -12px rgba(0,59,100,0.16)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(.2,.7,.2,1) forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
