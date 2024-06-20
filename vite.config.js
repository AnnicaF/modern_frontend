import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import { generateSW } from "workbox-build";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Geografisk Have",
        short_name: "GeoHave",
        start_url: "/",
        display: "standalone",
        background_color: "#125F31",
        theme_color: "#42b883",
        icons: [
          {
            src: "/img/icons/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{html,js,css,png,svg,webp,}"],
        runtimeCaching: [
          {
            urlPattern: /\.(?:html|js|css|png|webp|svg)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /api\/.*$/,
            handler: "NetworkOnly",
            options: {
              cacheName: "api-cache",
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
