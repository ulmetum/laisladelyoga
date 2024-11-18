// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'
import pagefind from 'astro-pagefind'

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), pagefind()],
    output: 'hybrid',
    adapter: node({
      mode: 'standalone'
    })
})