export interface MainMenu {
	data: Datum[]
}

interface Datum {
	id: number
	attributes: Attributes
}

interface Attributes {
	name: string
	menuItems: MenuItem[]
}

export interface MenuItem {
	id: number
	label: string
	url: string
}
