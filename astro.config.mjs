// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), pagefind()],
	output: 'hybrid',
	adapter: netlify()
})
