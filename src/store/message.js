import { makeAutoObservable } from 'mobx'

class Message {
	message = ''
	constructor() {
		makeAutoObservable(this)
	}

	addMessage(msg) {
		this.message = msg
	}
}

export default new Message()
