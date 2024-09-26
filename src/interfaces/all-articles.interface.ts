export interface AllArticles {
	data: Datum[]
}

interface Datum {
	id: number
	attributes: Attributes
}

interface Attributes {
	title: string
	createdAt: Date
	content: string
	slug: string
}
