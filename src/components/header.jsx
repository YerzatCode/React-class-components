import { Component } from 'react'
import { Link } from 'react-router-dom'
import { token } from '../const/localstorage'

export default class Header extends Component {
	render() {
		return (
			<header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
				<Link
					to='/'
					className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none docs-creator'>
					<span className='fs-4'>Simple header</span>
				</Link>

				{token ? (
					<ul className='nav nav-pills'>
						<li className='nav-item'>
							<Link
								to='/me'
								className='nav-link active docs-creator'
								aria-current='page'>
								Profile
							</Link>
						</li>
						<li className='nav-item'>
							<button
								onClick={() => localStorage.removeItem('token')}
								className='nav-link docs-creator'>
								Logout
							</button>
						</li>
					</ul>
				) : (
					<ul className='nav nav-pills'>
						<li className='nav-item'>
							<Link
								to='/register'
								className='nav-link active docs-creator'
								aria-current='page'>
								Sig Up
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/login' className='nav-link docs-creator'>
								Sign in
							</Link>
						</li>
					</ul>
				)}
			</header>
		)
	}
}
