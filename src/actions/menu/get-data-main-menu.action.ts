import type { MainMenu } from '@/interfaces'
import { getDataMainMenuQuery } from '@/queries'
import { defineAction } from 'astro:actions'

export const getDataMainMenu = defineAction({
	accept: 'json',
	handler: async () => {
		const query = getDataMainMenuQuery({ name: 'main' })

		const url = `${import.meta.env.API_URL}/menus?${query}`

		const response = await fetch(url)

		if (response.status !== 200) {
			throw new Error('Failed to fetch data')
		}

		const dataMainMenu = (await response.json()) as MainMenu

		// console.log({ query })
		return { dataMainMenu }
	}
})
