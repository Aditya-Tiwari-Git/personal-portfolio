import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Remove manual chunks to avoid circular dependency issues
    rollupOptions: {
      output: {
        // Let Vite handle chunking automatically
        manualChunks: undefined,
      },
    },
    // Increase chunk size warning limit since 3D libraries are naturally large
    chunkSizeWarningLimit: 1500,
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize for modern browsers
    target: "es2020",
  },
  // Optimize deps
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "motion/react",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "maath",
      "tailwind-merge",
    ],
  },
  // Ensure proper ES module handling
  esbuild: {
    target: "es2020",
  },
});
