// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import readingTime from './src/plugins/remark-reading-time.mjs';
import remarkEmoji from 'remark-emoji';

export default defineConfig({
  integrations: [mdx(), tailwind({applyBaseStyles: false})],
  markdown: {
    remarkPlugins: [readingTime, remarkEmoji]
  }
});