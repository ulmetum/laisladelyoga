export interface AllArticles {
	data: Datum[]
}

export interface Datum {
	id: number
	attributes: DatumAttributes
}

export interface DatumAttributes {
	title: string
	createdAt: Date
	excerpt: string
	content: string
	slug: string
	featuredImage: FeaturedImage
	writer: Writer
}

export interface FeaturedImage {
	data: FeaturedImageData
}

export interface FeaturedImageData {
	id: number
	attributes: PurpleAttributes
}

export interface PurpleAttributes {
	url: string
}

export interface Writer {
	data: WriterData | null
}

export interface WriterData {
	id: number
	attributes: FluffyAttributes
}

export interface FluffyAttributes {
	name: string
	email: string
	picture: FeaturedImage
}
