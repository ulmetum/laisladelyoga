export interface ArticlesByPage {
	data: Datum[]
	meta: Meta
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

interface Meta {
	pagination: Pagination
}

interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}
