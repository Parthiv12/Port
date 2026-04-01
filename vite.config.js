import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "bundle-analysis.html",
      template: "treemap"
    })
  ],

  server: {
    allowedHosts: ["parotidean-unfiscally-charlott.ngrok-free.dev"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/examples")) {
            return "vendor-three-extras"
          }
          if (id.includes("node_modules/three")) {
            return "vendor-three"
          }
          if (id.includes("node_modules/@react-three")) {
            return "vendor-r3f"
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-motion"
          }

        },
      },
    },
  },

  base: "/",
})