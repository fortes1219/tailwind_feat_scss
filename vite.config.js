import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "src/assets/"),
      "img": path.resolve(__dirname, "src/assets/img"),
      "styles": path.resolve(__dirname, "src/styles/"),
      "pages": path.resolve(__dirname, "src/pages/"),
    },
  },
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",
        assetFileNames: (info) => {
          let type = info.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(type)) {
            type = "img";
          } else if (/ttf|eot|woff|woff2/i.test(type)) {
            type = "fonts"
          } else if (/mp4|webm|ogg/i.test(type)) {
            type = "video"
          } else if (/mp3|wav/i.test(type)) {
            type = "sound"
          }
          return `${type}/[name]-[hash].[ext]`;
        },
      }
    }
  },
  css: {
    devSourcemap: true
  }
})