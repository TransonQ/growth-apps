import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // if (id.includes("node_modules")) {
          //   return (
          //     "vendor-" +
          //     id.toString().split("node_modules/")[1].split("/")[0].toString()
          //   )
          // }
          if (id.includes("node_modules")) {
            const packageName = id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString()
            const firstLetter = packageName[0].toLowerCase()
            return "vendor-" + firstLetter // Dividing packages by the first letter.
          }
        },
      },
    },
  },
})
