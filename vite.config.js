import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          "react-vendor": ["react", "react-dom"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "animation-vendor": ["motion", "maath"],
          "ui-vendor": ["tailwind-merge", "react-responsive"],
        },
      },
    },
    // Increase chunk size warning limit since 3D libraries are naturally large
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize for modern browsers
    target: "es2015",
  },
  // Optimize deps
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
    ],
  },
  // Performance optimizations
  esbuild: {
    drop: ["console", "debugger"],
  },
});
