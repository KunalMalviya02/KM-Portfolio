/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#050a0e",
        surface: "#0d1117",
        card: "#111820",
        border: "#1e2d3d",
        accent: "#00d4ff",
        accent2: "#7c3aed",
        accent3: "#10b981",
        muted: "#4a6a7a",
        text: "#e2eaf0",
        subtle: "#8ba3b0",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        scanline: "scanline 4s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
