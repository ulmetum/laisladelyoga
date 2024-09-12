export interface MainMenu {
	data: Datum[]
}

export interface Datum {
	id: number
	attributes: Attributes
}

export interface Attributes {
	name: string
	menuItems: MenuItem[]
}

export interface MenuItem {
	id: number
	label: string
	url: string
}
