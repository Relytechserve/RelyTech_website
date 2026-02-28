import type { Config } from "tailwindcss";

const config: Config = {
  safelist: [
    "from-amber-100", "to-orange-50", "border-amber-200/80",
    "from-primary-100", "to-blue-50", "border-primary-200/80",
    "from-emerald-100", "to-teal-50", "border-emerald-200/80",
    "from-sky-100", "border-sky-200/80",
    "from-violet-100", "to-purple-50", "border-violet-200/80",
    "from-rose-100", "to-pink-50", "border-rose-200/80",
    "lg:col-span-2",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8eccff",
          400: "#59b0ff",
          500: "#3392ff",
          600: "#1a73f5",
          700: "#135de1",
          800: "#164bb6",
          900: "#19418f",
          950: "#132a57",
        },
        navy: {
          900: "#0a1628",
          800: "#0f2442",
          700: "#153056",
          600: "#1a3d6b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
