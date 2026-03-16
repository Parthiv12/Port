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

  base: "/",
})