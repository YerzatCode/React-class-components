import  { Component } from 'react'
import { Navigate } from 'react-router-dom'
import user from '../store/user'

export default class RedirectAuth extends Component {
	render() {
		if (user.isAuth) {
			return <>{this.props.children}</>
		}
		return <Navigate to={'/'} replace />
	}
}
