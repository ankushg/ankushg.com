import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import react from '@astrojs/react'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
// import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://ankushg.com',
  markdown: {},
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    //   logLevel: "warn",
    // }),
  ],
  experimental: {
    contentCollections: true,
    errorOverlay: true,
  },
})
