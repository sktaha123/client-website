import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ─── Dev Server ────────────────────────────────────────────────────────────
  server: {
    headers: {
      // Tell the browser to cache all static assets (images, fonts, etc.)
      // for 1 year during development. Once loaded, they are served from
      // the browser disk cache with zero network round-trips.
      //
      // "immutable" means the browser won't even send a conditional request
      // (If-None-Match / If-Modified-Since) — the response is considered
      // permanently valid for the max-age duration.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },

  // ─── Production Build ──────────────────────────────────────────────────────
  build: {
    chunkSizeWarningLimit: 600,
    // Ensure hashed filenames for all assets so long-term caching is safe
    assetsInlineLimit: 0, // never inline as base64 — always external files
    rollupOptions: {
      output: {
        // Content-hash in filename = safe to cache forever
        // Browser only re-downloads when the content actually changes
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",

        // Split vendor chunks for better long-term caching:
        // App code changes → only app chunk re-downloaded
        // Vendor deps stay unchanged → served from cache
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-lenis": ["lenis"],
          "vendor-lucide": ["lucide-react"],
        },
      },
    },
  },

  // ─── Dependency Pre-bundling ────────────────────────────────────────────────
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lenis",
      "lucide-react",
    ],
  },
});
