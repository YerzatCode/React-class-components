import { makeAutoObservable } from 'mobx'

class Category {
	data = []

	constructor() {
		makeAutoObservable(this)
	}

	getAllCategory(data) {
		this.data = data
	}
}

export default new Category()
