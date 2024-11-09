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
				'sky-pale': '#61bbf7'
			},
			fontFamily: {
				body: ['Ubuntu'],
				heading: ['Oswald']
			},
			boxShadow: {
				'b-section': '0px 10px 20px -20px var(--text)',
				'y-section': '0px -10px 20px -20px var(--text), 0px 10px 20px -20px var(--text)'
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			}
		}
	},
	plugins: [typography]
}
