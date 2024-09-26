import type { AllArticles } from '@/interfaces'
import { getAllArticlesQuery } from '@/queries'
import { defineAction } from 'astro:actions'

export const getAllArticles = defineAction({
	accept: 'json',
	handler: async () => {
		const query = getAllArticlesQuery()

		const url = `${import.meta.env.API_URL}/articles?${query}`

		console.log({ url })
		const res = await fetch(url)

		if (res.status !== 200) {
			throw new Error('Hubo un error al obtener los datos de los artículos')
		}

		const articles = (await res.json()) as AllArticles

		return { articles }
	}
})
