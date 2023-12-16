import axios from 'axios'
import { config, url } from '../const/url'
import message from '../store/message'
import user from '../store/user'
import notify from '../toastify/toastify'

class UserFetch {
	async AuthVerif() {
		await axios
			.get(url + '/auth/me', config)
			.then((res) => {
				user.login(res.data)
			})
			.catch((err) => {
				localStorage.removeItem('token')
				console.log(err.response.data.message)
			})
	}
	async Login(data) {
		await axios.post(url + '/auth/signin', data).then((res) => {
			user.login(res.data)
			localStorage.setItem('token', res.data.token)
			if (res.status == 200) {
				message.addMessage('Успешна вошли в аккаунт')
			}
			notify()
		})
	}
	async Register(data) {
		await axios.post(url + '/auth/signup', data).then((res) => {
			user.login(res.data)
			localStorage.setItem('token', res.data.token)
			if (res.status == 201) {
				message.addMessage('Аккаунт успешна создан')
            }
            notify()
		})
	}
}
export default new UserFetch()
