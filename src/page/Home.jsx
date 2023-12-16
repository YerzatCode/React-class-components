import { Component } from 'react'
import CategoryList from '../components/user/CategoryList'
import ProductList from '../components/user/ProductList'
import categoryFetch from '../fetch/category.fetch'
import productFetch from '../fetch/product.fetch'

export default class Home extends Component {
	componentDidMount() {
		productFetch.getAll()
		categoryFetch.AllCategory()
	}
	render() {
		return (
			<div className='row'>
				<div className='col-9'>
					<div className='album py-2'>
						<div className='container'>
							<div className='row'>
								<h1 className='mb-3'>Список товаров</h1>
								<ProductList />
							</div>
						</div>
					</div>
				</div>
				<div className='col-3'>
					<CategoryList />
				</div>
			</div>
		)
	}
}
