import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike({}), react({})],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.endsWith('.css')) return
          const name = id.split('/').pop().split('.')[0]
          return name
        }
      }
    },
    /*
    cssCodeSplit: false,
    cssMinify: false
    */
  }
});
