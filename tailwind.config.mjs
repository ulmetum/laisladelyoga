import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pampas: {
					50: '#f6f2ef'
				}
			},
			fontFamily: {
				body: ['Ubuntu'],
				heading: ['Oswald']
			}
		}
	},
	plugins: [typography]
}
