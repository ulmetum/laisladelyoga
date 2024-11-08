export interface AllArticles {
	data: Datum[]
}

export interface Datum {
	id: number
	documentId: string
	title: string
	createdAt: Date
	slug: string
	excerpt: string
	elements: ArticleElement[]
	tags: Tag[]
	featuredImage: ImageComponent
	writer: Writer
	metadata: Metadata
}

export interface ArticleElement {
	__component: string
	id: number
	alt?: null
	image?: ImageComponent
	richText?: string
	videoUrl?: VideoURL
}

export interface ElementPhoto {
	__component: string
	id: number
	image?: ImageComponent
}

export interface ElementText {
	__component: string
	id: number
	richText?: string
}

export interface ElementVideo {
	__component: string
	id: number
	videoUrl?: VideoURL
}

export interface ImageComponent {
	id: number
	documentId: string
	url: string
}

export interface VideoURL {
	url: string
	provider: string
	providerUid: string
}

export interface Metadata {
	id: number
	metaTitle: string
	metaDescription: string
	sharedImage: null
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
	picture: null
}
