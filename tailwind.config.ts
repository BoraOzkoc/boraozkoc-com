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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        // scroll:
        //   "scroll var(--animation-duration, 10s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        // scroll: {
        //   to: {
        //     transform: "translate(calc(-50% - 1rem))",
        //   },
        // },
        "infinite-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(calc(-100% - 0.5rem))" },
        },
        
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
};

export default config;
