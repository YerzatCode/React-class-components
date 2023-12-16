import axios from 'axios'
import { config, url } from '../const/url'
import category from '../store/category'
import message from '../store/message'
import modal from '../store/modal'
import product from '../store/product'
import notify from '../toastify/toastify'

class CategoryFetch {
	constructor() {}

	async categoryProduct(id) {
		await axios
			.get(url + `/categories/${id}`)
			.then((res) => {
				product.getAllProducts(res.data.products)
			})
			.catch((err) => {
				if (err) {
					message.addMessage('Ошибка с категориями')
				}
				notify()
			})
	}
	async AllCategory() {
		await axios
			.get(url + '/categories')
			.then((res) => {
				category.getAllCategory(res.data)
			})
			.catch((err) => {
				if (err) {
					message.addMessage('Ошибка с категориями')
				}
				notify()
			})
	}
	async createCategory(data) {
		await axios.post(url + `/categories`, data, config).then((res) => {
			if (res.status == 201) {
				message.addMessage('Успешна создан')
			}
			notify()

			modal.openModal()
		})
	}
}
export default new CategoryFetch()
