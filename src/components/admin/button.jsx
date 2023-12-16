import { Component } from 'react'
import { Link } from 'react-router-dom'
import modal from '../../store/modal'
import user from '../../store/user'

export default class AdminButton extends Component {
	render() {
		if (user.roles === 'ROLE_ADMIN') {
			return (
				<div
					style={{
						width: '200px',
						display: 'grid',
						gap: 8,
					}}>
					<Link
						to='/create'
						style={{
							width: '100%',
							display: 'flex',
						}}>
						<button
							className='btn btn-sm btn-outline-secondary'
							style={{ width: '100%' }}>
							Создать товар
						</button>
					</Link>
					<button
						onClick={() => modal.openModal()}
						className='btn btn-sm btn-outline-secondary'>
						Создать категорию
					</button>
				</div>
			)
		}
	}
}
