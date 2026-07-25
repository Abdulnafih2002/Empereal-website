import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const siteHost =
  configuredSite ||
  vercelProductionHost ||
  "empereal-website.vercel.app";
const site = /^https?:\/\//i.test(siteHost)
  ? siteHost
  : `https://${siteHost}`;

export default defineConfig({
  site,
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 4321 },
  compressHTML: true,
});
