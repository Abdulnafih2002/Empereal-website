import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://empereal.energy",
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  server: { port: 4321 },
  compressHTML: true,
});
