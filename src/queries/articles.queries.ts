import qs from 'qs'

export const getAllArticlesQuery = () => {
	return qs.stringify(
		{
			fields: ['title', 'createdAt', 'slug', 'excerpt'],
			sort: ['createdAt:desc'],
			populate: {
				elements: {
					on: {
						'elements.text': {
							populate: '*'
						},
						'elements.photo': {
							populate: {
								image: {
									fields: ['url']
								}
							}
						},
						'elements.video': {
							populate: '*'
						}
					}
				},
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
