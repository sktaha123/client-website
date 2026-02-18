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
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunking to split vendor libs for better caching
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-lenis": ["lenis"],
          "vendor-lucide": ["lucide-react"],
        },
      },
    },
  },
  // Optimize deps for faster dev server startup
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion", "lenis", "lucide-react"],
  },
});
