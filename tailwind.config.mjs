import typography from '@tailwindcss/typography'
import tailwindcssMotion from 'tailwindcss-motion'

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
				elastic: 'easeOutElastic 1s ease-out',
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite'
			},
			keyframes: {
				elastic: {
					'0%': { transform: 'translateX(0%)' },
					'16%': { transform: 'translateX(-132.27%)' },
					'28%': { transform: 'translateX(-86.88%)' },
					'44%': { transform: 'translateX(-104.63%)' },
					'59%': { transform: 'translateX(-98.36%)' },
					'73%': { transform: 'translateX(-100.58%)' },
					'88%': { transform: 'translateX(-99.8%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
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
	plugins: [typography, tailwindcssMotion]
}
