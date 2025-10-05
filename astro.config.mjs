import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; // o `vercel()` si querés SSR.

export default defineConfig({
  adapter: vercel(),
});
