import { observer } from 'mobx-react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductListAdmin from '../components/admin/ProductList'
import AdminButton from '../components/admin/button'
import CreateCategory from '../components/modal/CreateCategory'
import productFetch from '../fetch/product.fetch'
import cart from '../store/cart'
import user from '../store/user'

// eslint-disable-next-line react-refresh/only-export-components
export default observer(
	class Profile extends Component {
		state = {
			product: [],
		}

		componentDidMount() {
			productFetch.getAll()
		}

		render() {
			return (
				<div className='p-2'>
					<CreateCategory />
					<div
						className='j'
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}>
						<div>
							<p>
								<strong>Имя:</strong>
								{user.username}
							</p>
							<p>
								<strong>Почта:</strong>
								{user.email}
							</p>
							<p>
								<strong>Роль:</strong>
								{user.roles}
							</p>
						</div>
						<AdminButton />
					</div>
					<ProductListAdmin />
					{user.roles === 'ROLE_USER' && (
						<div className='album py-5'>
							<div className='container'>
								<div className='row'>
									<h2 className='pb-5'>Список товаров</h2>
									{cart.cart.map((item) => (
										<div key={item.id} className='col-md-4'>
											<div className='card mb-4 box-shadow'>
												<img
													className='card-img-top'
													alt='Thumbnail [100%x225]'
													style={{
														height: '225px',
														width: '100%',
														display: 'block',
														objectFit: 'contain',
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
															<button
																onClick={() => cart.removeProduct(item.id)}
																className='btn btn-sm btn-outline-secondary'>
																Remove
															</button>
														</div>
														<small className='text-muted'>
															<h3>{item.unitPrice}$</h3>
														</small>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			)
		}
	}
)
