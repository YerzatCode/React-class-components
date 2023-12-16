import { makeAutoObservable } from 'mobx'

class Cart {
	cart = []
	constructor() {
		makeAutoObservable(this)
	}

	addCart(data) {
		let isArray = false
		this.cart.forEach((item) => {
			if (item.id === data.id) {
				isArray = true
			}
		})
		if (!isArray) {
			this.cart = [...this.cart, data]
		}
	}
	removeProduct(id) {
		this.cart = this.cart.filter((el) => el.id !== id)
	}
}

export default new Cart()
