import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://empereal.energy",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  server: { port: 4321 },
  compressHTML: true,
});
