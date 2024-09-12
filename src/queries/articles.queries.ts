import qs from 'qs'

export const getAllArticlesQuery = () => {
	return qs.stringify(
		{
			fields: ['title', 'subTitle', 'createdAt', 'content', 'slug'],
			sort: ['createdAt:desc'],
			populate: {
				tags: { fields: ['name'] },
				featuredImage: {
					fields: ['url']
				},
				author: {
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
