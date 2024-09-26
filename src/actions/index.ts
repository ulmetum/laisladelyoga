import { getAllArticles } from '@/actions/articles/get-all-articles.action'
import { getDataMainMenu } from './menu/get-data-main-menu.action'
import { getArticlesByPage } from './articles/get-articles-by-page.action'

export const server = {
	// Articles
	getArticlesByPage,
	getAllArticles,
	// Menu
	getDataMainMenu
}
