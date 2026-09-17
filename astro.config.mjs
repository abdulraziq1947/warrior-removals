import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wiganremoval.co.uk",
  trailingSlash: "always",
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
