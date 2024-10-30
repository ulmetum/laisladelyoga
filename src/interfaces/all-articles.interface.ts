export interface AllArticles {
	data: Datum[]
}

export interface Datum {
	id: number
	documentId: string
	title: string
	createdAt: Date
	content: string
	slug: string
	excerpt: string
	tags: Tag[]
	featuredImage: FeaturedImage
	writer: Writer
	metadata: Metadata
}

export interface FeaturedImage {
	id: number
	documentId: string
	url: string
}

export interface Metadata {
	id: number
	metaTitle: string
	metaDescription: string
	sharedImage: FeaturedImage | null
}

export interface Tag {
	id: number
	documentId: string
	slug: string
}

export interface Writer {
	id: number
	documentId: string
	name: string
	email: string
	picture: FeaturedImage
}

// export interface AllArticles {
// 	data: Datum[]
// }

// export interface Datum {
// 	id: number
// 	documentId: string
// 	title: string
// 	createdAt: Date
// 	content: string
// 	slug: string
// 	excerpt: string
// 	tags: Tag[]
// 	featuredImage: FeaturedImage
// 	writer: Writer
// }

// export interface FeaturedImage {
// 	id: number
// 	documentId: string
// 	url: string
// }

// export interface Tag {
// 	id: number
// 	documentId: string
// 	name: string
// }

// export interface Writer {
// 	id: number
// 	documentId: string
// 	name: string
// 	email: string
// 	picture: FeaturedImage
// }
