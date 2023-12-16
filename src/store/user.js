import { makeAutoObservable } from 'mobx'

class User {
	username = ''
	email = ''
	id = 0
	roles = ''
	isAuth = false

	constructor() {
		makeAutoObservable(this)
	}
	login(data) {
		this.username = data.username
		this.email = data.email
		this.id = data.id
		this.roles = data.roles[0].name
		this.isAuth = true
	}
}

export default new User()
