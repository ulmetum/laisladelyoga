import type { AllArticles } from '@/interfaces'
import { getAllArticlesQuery } from '@/queries'
import { fetchData } from '@/utils'
import { defineAction } from 'astro:actions'

export const getAllArticles = defineAction({
	accept: 'json',
	handler: async () => {
		const query = getAllArticlesQuery()

		const url = `articles?${query}`

		// console.log({ url })

		const articles = await fetchData<AllArticles>(url)

		return { articles }
	}
})
