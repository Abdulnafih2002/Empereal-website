import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://empereal.energy",
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 4321 },
  compressHTML: true,
});
