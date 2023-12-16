import { makeAutoObservable } from 'mobx'

class Modal {
	isOpen = false

	constructor() {
		makeAutoObservable(this)
	}
	openModal() {
		this.isOpen = !this.isOpen
		console.log(this.isOpen)
	}
}

export default new Modal()
