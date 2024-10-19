import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#b45309',
				secondary: '#082f49',
				text: '#18181b',
				light: '#f6f2ef',
				turquoise: '#349098',
				'purple-pale': '#b06dcc',
				green: '#166534'
			},
			fontFamily: {
				body: ['Ubuntu'],
				heading: ['Oswald']
			},
			boxShadow: {
				'b-section': '0px 10px 20px -20px var(--text-rgb)',
				'y-section': '0px -10px 20px -20px var(--text-rgb), 0px 10px 20px -20px var(--text-rgb)'
			}
		}
	},
	plugins: [typography]
}
