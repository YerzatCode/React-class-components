import axios from 'axios'
import { config, url } from '../const/url'
import message from '../store/message'
import product from '../store/product'
import notify from '../toastify/toastify'

class ProductFetch {
	constructor() {}

	async getAll() {
		await axios.get(url + '/products/').then((res) => {
			product.getAllProducts(res.data)
		})
	}
	async getOne(id) {
		await axios.get(url + `/products/${id}`).then((res) => {
			product.getOneProduct(res.data)
		})
	}
	async updateProduct(data, id) {
		await axios
			.patch(url + `/products/update/${id}`, data, config)
			.then((res) => {
				if (res.status == 200) {
					message.addMessage('Успешна обновлен')
				}
				notify()
			})
			.catch((err) => {
				if (err) {
					message.addMessage('Ошибка')
				}
				notify()
			})
	}
	async createProduct(data) {
		await axios
			.post(url + `/products/create`, data, config)
			.then((res) => {
				if (res.status == 201) {
					message.addMessage('Успешна создан')
				}
				notify()
			})
			.catch((err) => {
				if (err) {
					message.addMessage('Ошибка')
				}
				notify()
			})
	}

	async deleteProduct(id) {
		axios
			.delete(url + '/products/delete/' + id, config)
			.then((res) => {
				if (res.status == 204) {
					message.addMessage('Успешна удален')
				}
				notify()
			})
			.catch((err) => {
				if (err) {
					message.addMessage('Ошибка')
				}
				notify()
			})
	}
}

export default new ProductFetch()
