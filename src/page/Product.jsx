import { observer } from 'mobx-react'
import { Component } from 'react'
import { Image } from 'react-bootstrap'
import productFetch from '../fetch/product.fetch'
import product from '../store/product'

// eslint-disable-next-line react-refresh/only-export-components
export default observer(
	class Product extends Component {
		studentId = window.location.href.split('/')[4]

		componentDidMount() {
			productFetch.getOne(this.studentId)
		}
		render() {
			return (
				<div className='container'>
					<div className='info'>
						<Image
							src={product.product.imageUrl}
							style={{ width: '700px', height: '600px', objectFit: 'cover' }}
						/>
						<div
							style={{
								marginTop: 50,
								paddingLeft: 10,
							}}>
							<h1>{product.product.name}</h1>
							<h3
								style={{
									color: '#514c4c',
									paddingLeft: 10,
								}}>
								${product.product.unitPrice}
							</h3>
							<strong>Описания: </strong>
							<p
								style={{
									background: '#eeeeee',
									padding: 10,
									borderRadius: 10,
								}}>
								{product.product.description}
							</p>
							<p>
								<strong>Кампания:</strong>
								{product.product.sku}
							</p>

							<p>
								<strong>Складе: </strong>
								{product.product.unitsInStock}
							</p>
						</div>
					</div>
				</div>
			)
		}
	}
)
