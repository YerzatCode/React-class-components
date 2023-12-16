import { observer } from 'mobx-react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import productFetch from '../../fetch/product.fetch'
import product from '../../store/product'
import user from '../../store/user'

// eslint-disable-next-line react-refresh/only-export-components
export default observer(
	class ProductListAdmin extends Component {
		render() {
			if (user.roles === 'ROLE_ADMIN') {
				return (
					<div className='album py-5'>
						<div className='container'>
							<div className='row'>
								<h2 className='pb-5'>Список товаров</h2>
								{product.data.map((item) => (
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
														<Link to={'/edit/' + item.id}>
															<button className='btn btn-sm btn-outline-secondary'>
																Edit
															</button>
														</Link>
														<button
															onClick={() =>
																productFetch.deleteProduct(item.id)
															}
															className='btn btn-sm btn-outline-secondary'>
															Remove
														</button>
													</div>
													<small className='text-muted'>
														{item.dateCreated}
													</small>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				)
			}
		}
	}
)
