import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import pdf from "astro-pdf";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    react(),
    sitemap(),
    pdf({
      pages: {
        "/resume": "/resume.pdf"
      },
      baseOptions: {
        format: "A4",
        margin: {
          top: "0.75in",
          right: "0.75in",
          bottom: "0.75in",
          left: "0.75in"
        },
        printBackground: true,
        waitUntil: "networkidle2"
      }
    })
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
