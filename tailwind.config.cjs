/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F3C5C",
          dark: "#11243C",
          light: "#2E5489",
          50: "#F3F6FA",
          100: "#E2EAF3",
        },
        accent: {
          DEFAULT: "#F5B82E",
          dark: "#D99E12",
          soft: "#FEF6DF",
        },
        orange: {
          DEFAULT: "#F27400",
          dark: "#C85E00",
        },
        cta: {
          DEFAULT: "#2E4FC1",
          dark: "#1F3A9C",
        },
        success: {
          DEFAULT: "#22C55E",
          dark: "#16A34A",
        },
        ink: "#0F172A",
        muted: "#64748B",
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
        card: "0 1px 2px rgba(17,36,60,0.04), 0 12px 24px -8px rgba(17,36,60,0.08)",
        "card-lg": "0 2px 4px rgba(17,36,60,0.05), 0 24px 48px -12px rgba(17,36,60,0.16)",
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
