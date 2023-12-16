import { token } from './localstorage'

export const url = 'http://localhost:8080/api'
export const config = {
	headers: {
		Authorization: 'Bearer ' + token,
	},
}
