import qs from 'qs'

export const getAllArticlesQuery = () => {
	return qs.stringify(
		{
			fields: ['title', 'createdAt', 'content', 'slug', 'excerpt'],
			sort: ['createdAt:desc'],
			populate: {
				tags: { fields: ['name'] },
				featuredImage: {
					fields: ['url']
				},
				writer: {
					populate: { picture: { fields: ['url'] } },
					fields: ['name', 'email']
				}
			}
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	)
}

export const getArticlesByPageQuery = ({ page }: { page: string }) => {
	// console.log({ page })
	return qs.stringify(
		{
			fields: ['title', 'createdAt', 'content', 'slug'],
			populate: {
				featuredImage: {
					fields: ['url']
				},
				author: {
					populate: { picture: { fields: ['url'] } },
					fields: ['name', 'email']
				}
			},
			sort: ['createdAt:desc'],
			pagination: {
				page,
				pageSize: 5
			}
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	)
}
