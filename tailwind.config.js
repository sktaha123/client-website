/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biz: {
          // CREAM: Backgrounds & Paper layers
          cream: {
            DEFAULT: "#FAF9F6", // Base Page
            light: "#FFFFFF",   // Pure white for highlights
            dark: "#F2F0EA",    // Subtle section backgrounds
          },
          // CHARCOAL: Primary Text & Depth
          charcoal: {
            DEFAULT: "#2D2219", // Main headings
            muted: "#4A3F35",   // Secondary body text
            soft: "#736960",    // Captions/Small labels
            ink: "#1A140F",     // Deepest shadows/footers
          },
          // BRONZE: Accents & Branding
          bronze: {
            DEFAULT: "#8B7E6A", // Brand primary
            light: "#B4A998",   // Soft icons/dividers
            dark: "#635848",    // Hover states for links
            pale: "#DCD7CE",    // Very light borders
          },
          // SAND/STONE: Supporting neutrals
          sand: {
            DEFAULT: "#EAE4D9", // Card backgrounds
            muted: "#D8D0C1",   // Interaction states
          }
        },
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      // Added spacing for architectural layouts
      letterSpacing: {
        tightest: "-.04em",
        widest: ".3em",
        ultra: ".5em",
      },
      // Added custom border radius for that "rounded-biz" look
      borderRadius: {
        'biz': '2.5rem',
      }
    },
  },
  plugins: [],
};