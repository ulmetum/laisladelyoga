export type ValidationError = {
	code: string
	message: string
	path: string[]
	minimum?: number
	type?: string
	inclusive?: boolean
	exact?: boolean
	validation?: string
}
