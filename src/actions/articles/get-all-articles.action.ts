import { getAllArticlesQuery } from '@/queries'
import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const getAllArticles = defineAction({
	accept: 'json',
	// input: z.string(),
	handler: async () => {
		const query = getAllArticlesQuery()

		// console.log({ query })

		return { success: true }
	}
})
