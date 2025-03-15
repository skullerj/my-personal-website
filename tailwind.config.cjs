/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    textColor: {
      skin: {
        base: "var(--color-text-base)",
        accent: "var(--color-accent)",
        inverted: "var(--color-fill)",
      },
    },
    backgroundColor: {
      skin: {
        fill: "var(--color-fill)",
        accent: "var(--color-accent)",
        inverted: "var(--color-text-base)",
        card: "var(--color-card)",
        "card-muted": "var(--color-card-muted)",
      },
    },
    outlineColor: {
      skin: {
        fill: "var(--color-accent)",
      },
    },
    borderColor: {
      skin: {
        line: "var(--color-border)",
        fill: "var(--color-text-base)",
        accent: "var(--color-accent)",
      },
    },
    fill: {
      skin: {
        base: "var(--color-text-base)",
        accent: "var(--color-accent)",
      },
      transparent: "transparent",
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
