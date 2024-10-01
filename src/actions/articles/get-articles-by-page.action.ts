import type { ArticlesByPage } from '@/interfaces'
import { getArticlesByPageQuery } from '@/queries'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getArticlesByPage = defineAction({
	accept: 'json',
	input: z.object({
		page: z.string().optional().default('1')
	}),
	handler: async ({ page }) => {
		const query = getArticlesByPageQuery({ page })
		const url = `${import.meta.env.API_URL}/articles?${query}`

		const res = await fetch(url)

		if (res.status !== 200) {
			throw new Error('Hubo un error al obtener los datos de los artículos')
		}

		const articles = (await res.json()) as ArticlesByPage

		return { articles }
	}
})
