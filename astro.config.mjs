import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

const siteUrl = 'https://www.flopitec.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});