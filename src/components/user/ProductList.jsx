import { observer } from 'mobx-react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import cart from '../../store/cart'
import product from '../../store/product'
import user from '../../store/user'

// eslint-disable-next-line react-refresh/only-export-components
export default observer(
	class ProductList extends Component {
		render() {
			return (
				<>
					{product.data.map((item) => (
						<div key={item.id} className='col-md-4'>
							<div className='card mb-4 box-shadow'>
								<img
									className='card-img-top'
									alt='Thumbnail [100%x225]'
									style={{
										height: '300px',
										width: '100%',
										display: 'block',
										objectFit: 'cover',
									}}
									src={item.imageUrl}
								/>
								<div className='card-body'>
									<h5>{item.name}</h5>
									<p className='card-text'>{item.description}</p>
									<div className='d-flex justify-content-between align-items-center'>
										<div className='btn-group'>
											<Link to={'/product/' + item.id}>
												<button className='btn btn-sm btn-outline-secondary'>
													View
												</button>
											</Link>
											{user.roles === 'ROLE_USER' && (
												<button
													onClick={() => cart.addCart(item)}
													className='btn btn-sm btn-outline-secondary'>
													Cart
												</button>
											)}
										</div>
										<small className='text-muted'>
											<h3>{item.unitPrice}$</h3>
										</small>
									</div>
								</div>
							</div>
						</div>
					))}
				</>
			)
		}
	}
)
