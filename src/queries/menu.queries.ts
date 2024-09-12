import qs from 'qs'

export const getDataMainMenuQuery = ({ name }: { name: string }) => {
	return qs.stringify(
		{
			fields: ['name'],
			populate: {
				menuItems: {
					fields: ['label', 'url']
				}
			},
			filters: {
				name: {
					$eqi: name
				}
			}
		},
		{
			encodeValuesOnly: true // prettify URL
		}
	)
}
