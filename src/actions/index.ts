import { getAllArticles } from '@/actions/articles/get-all-articles.action'
import { getDataMainMenu } from '@/actions/menu/get-data-main-menu.action'
import { sendMessage } from '@/actions/contact/sendMessage.action'

export const server = {
	// Articles
	getAllArticles,
	// Menu
	getDataMainMenu,
	// Contact
	sendMessage
}
