/** @type {import('tailwindcss').Config} */

/**
 * BIZNORX — TAILWIND COLOR BRIDGE
 *
 * All actual color values live in src/index.css  →  :root { }
 * This file only maps CSS var names to Tailwind utility names.
 *
 * Current palette:
 *   Light bg:   #F7F5F5 · #FFFFFF · #EDE9E9
 *   Dark bg:    #050505 · #110808 · #1C0C0C
 *   Brand red:  #A31515 (primary) · #5E1111 (deep) · #D05050 (light) · #F5DADA (pale)
 *   Text:       #1A0606 · #3D1515 · #7A4040 · #050505
 *   Neutral:    #EDE0E0 · #DCC8C8
 *   Derived:    #3D0B0B · #C07070 · #FAF0F0
 *
 * To retheme: edit ONLY :root in src/index.css
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biz: {

          // ── Light page backgrounds ──────────────────────────
          cream: {
            DEFAULT: "var(--biz-cream)",        // bg-biz-cream
            light:   "var(--biz-cream-light)",  // bg-biz-cream-light
            dark:    "var(--biz-cream-dark)",   // bg-biz-cream-dark
          },

          // ── Dark / hero backgrounds ─────────────────────────
          dark: {
            DEFAULT: "var(--biz-dark)",         // bg-biz-dark
            surface: "var(--biz-dark-surface)", // bg-biz-dark-surface
            panel:   "var(--biz-dark-panel)",   // bg-biz-dark-panel
          },

          // ── Brand red (named "bronze" for full backwards compat) ──
          bronze: {
            DEFAULT: "var(--biz-bronze)",       // bg-biz-bronze / text-biz-bronze
            light:   "var(--biz-bronze-light)", //   icon tint on dark bg
            dark:    "var(--biz-bronze-dark)",  //   hover / pressed
            pale:    "var(--biz-bronze-pale)",  //   ghost borders
          },

          // ── Extra red shades ────────────────────────────────
          red: {
            ultra: "var(--biz-red-ultra)", // bg-biz-red-ultra
            muted: "var(--biz-red-muted)", // text-biz-red-muted
            blush: "var(--biz-red-blush)", // bg-biz-red-blush
          },

          // ── Text / near-black ───────────────────────────────
          charcoal: {
            DEFAULT: "var(--biz-charcoal)",       // text-biz-charcoal
            muted:   "var(--biz-charcoal-muted)", // text-biz-charcoal-muted
            soft:    "var(--biz-charcoal-soft)",  // text-biz-charcoal-soft
            ink:     "var(--biz-charcoal-ink)",   // text-biz-charcoal-ink
          },

          // ── Warm off-red neutrals ────────────────────────────
          sand: {
            DEFAULT: "var(--biz-sand)",       // bg-biz-sand
            muted:   "var(--biz-sand-muted)", // bg-biz-sand-muted
          },
        },
      },

      fontFamily: {
        dm:   ["DM Sans",           "Inter",   "sans-serif"],
        alix: ["Plus Jakarta Sans", "DM Sans", "sans-serif"],
      },

      letterSpacing: {
        tightest: "-0.04em",
        widest:   "0.3em",
        ultra:    "0.5em",
      },

      borderRadius: {
        biz: "2.5rem",
      },
    },
  },
  plugins: [],
};