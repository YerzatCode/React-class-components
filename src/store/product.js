import { makeAutoObservable } from 'mobx'

class Product {
	product = {}
	data = []

	constructor() {
		makeAutoObservable(this)
	}

	getAllProducts(data) {
		this.data = data
	}
	getOneProduct(data) {
		this.product = data
	}
	getCategoryProduct
}

export default new Product()
