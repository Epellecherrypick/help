// tailwind.config.js
// tailwind.config.js
module.exports = {
  darkMode: "class",   // ← add this line
   content: [
    "./src/pages/*/.{js,ts,jsx,tsx,mdx}",
    "./src/components/*/.{js,ts,jsx,tsx,mdx}",
    "./src/app/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translate(-50%, 100px)", opacity: "0" },
          "100%": { transform: "translate(-50%, 0)", opacity: "1" },
        },
        pop: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out",
        pop: "pop 0.3s ease",
      },
    },
  },
}

module.exports = {
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translate(-50%, 100px)", opacity: "0" },
          "100%": { transform: "translate(-50%, 0)", opacity: "1" },
        },
        pop: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.4)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out",
        pop: "pop 0.3s ease",
      },
    },
  },
}