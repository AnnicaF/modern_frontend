// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/annicafrederiksen/webudvikler/frontend_eksamen/GeoGarden/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/annicafrederiksen/webudvikler/frontend_eksamen/GeoGarden/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VitePWA } from "file:///Users/annicafrederiksen/webudvikler/frontend_eksamen/GeoGarden/node_modules/vite-plugin-pwa/dist/index.js";
import { generateSW } from "file:///Users/annicafrederiksen/webudvikler/frontend_eksamen/GeoGarden/node_modules/workbox-build/build/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/annicafrederiksen/webudvikler/frontend_eksamen/GeoGarden/vite.config.js";
var vite_config_default = defineConfig({
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
            purpose: "any maskable"
          }
        ]
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
                maxAgeSeconds: 30 * 24 * 60 * 60
                // 30 days
              }
            }
          },
          {
            urlPattern: /api\/.*$/,
            handler: "NetworkOnly",
            options: {
              cacheName: "api-cache"
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW5uaWNhZnJlZGVyaWtzZW4vd2VidWR2aWtsZXIvZnJvbnRlbmRfZWtzYW1lbi9HZW9HYXJkZW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hbm5pY2FmcmVkZXJpa3Nlbi93ZWJ1ZHZpa2xlci9mcm9udGVuZF9la3NhbWVuL0dlb0dhcmRlbi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYW5uaWNhZnJlZGVyaWtzZW4vd2VidWR2aWtsZXIvZnJvbnRlbmRfZWtzYW1lbi9HZW9HYXJkZW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCB7IGdlbmVyYXRlU1cgfSBmcm9tIFwid29ya2JveC1idWlsZFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFwiR2VvZ3JhZmlzayBIYXZlXCIsXG4gICAgICAgIHNob3J0X25hbWU6IFwiR2VvSGF2ZVwiLFxuICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogXCIjMTI1RjMxXCIsXG4gICAgICAgIHRoZW1lX2NvbG9yOiBcIiM0MmI4ODNcIixcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2ltZy9pY29ucy9hbmRyb2lkLWxhdW5jaGVyaWNvbi01MTItNTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogW1wiKiovKi57aHRtbCxqcyxjc3MscG5nLHN2Zyx3ZWJwLH1cIl0sXG4gICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogL1xcLig/Omh0bWx8anN8Y3NzfHBuZ3x3ZWJwfHN2ZykkLyxcbiAgICAgICAgICAgIGhhbmRsZXI6IFwiQ2FjaGVGaXJzdFwiLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwic3RhdGljLWFzc2V0c1wiLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogNTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAsIC8vIDMwIGRheXNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvYXBpXFwvLiokLyxcbiAgICAgICAgICAgIGhhbmRsZXI6IFwiTmV0d29ya09ubHlcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImFwaS1jYWNoZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVyxTQUFTLGVBQWUsV0FBVztBQUVsWixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsa0JBQWtCO0FBTDJNLElBQU0sMkNBQTJDO0FBUXZSLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULGtCQUFrQjtBQUFBLFFBQ2xCLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsa0NBQWtDO0FBQUEsUUFDakQsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLFlBQ2I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
