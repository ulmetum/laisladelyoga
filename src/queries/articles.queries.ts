import qs from 'qs'

export const getAllArticlesQuery = () => {
	return qs.stringify(
		{
			fields: ['title', 'createdAt', 'content', 'slug', 'excerpt'],
			sort: ['createdAt:desc'],
			populate: {
				tags: { fields: ['slug'] },
				featuredImage: {
					fields: ['url']
				},
				writer: {
					fields: ['name', 'email'],
					populate: { picture: { fields: ['url'] } }
				},
				metadata: {
					populate: { sharedImage: { fields: ['url'] } }
				}
			}
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	)
}

// export const getArticlesByPageQuery = ({ page }: { page: string }) => {
// 	// console.log({ page })
// 	return qs.stringify(
// 		{
// 			fields: ['title', 'createdAt', 'content', 'slug'],
// 			populate: {
// 				featuredImage: {
// 					fields: ['url']
// 				},
// 				author: {
// 					fields: ['name', 'email'],
// 					populate: { picture: { fields: ['url'] } }
// 				}
// 			},
// 			sort: ['createdAt:desc'],
// 			pagination: {
// 				page,
// 				pageSize: 5
// 			}
// 		},
// 		{
// 			encodeValuesOnly: true // prettify URL
// 		}
// 	)
// }
