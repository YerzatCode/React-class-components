import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import user from '../store/user'

export default class RedirectAdmin extends Component {
	render() {
		if (user.roles === 'ROLE_ADMIN') {
			return <>{this.props.children}</>
		}
		return <Navigate to={'/'} replace />
	}
}
