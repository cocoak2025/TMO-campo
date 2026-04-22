import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import prerender from "@prerenderer/rollup-plugin";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
    ...(process.env.NODE_ENV === "production"
      ? [
          prerender({
            routes: ["/", "/mentions-legales"],
            renderer: "@prerenderer/renderer-puppeteer",
            rendererOptions: {
              renderAfterDocumentEvent: "render-event",
              maxConcurrentRoutes: 2,
              headless: true,
            },
            postProcess(renderedRoute: {
              route: string;
              html: string;
              originalRoute: string;
              outputPath?: string;
            }) {
              // Preserve absolute asset URLs and ensure trailing slash removal for index path
              renderedRoute.html = renderedRoute.html.replace(
                /http:\/\/localhost:\d+/g,
                "",
              );
              return renderedRoute;
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
