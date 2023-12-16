import { observer } from 'mobx-react'
import { Component } from 'react'
import categoryFetch from '../../fetch/category.fetch'
import category from '../../store/category'

// eslint-disable-next-line react-refresh/only-export-components
export default observer(
	class CategoryList extends Component {
		render() {
			return (
				<div className='row gap-2'>
					{category.data.map((item) => (
						<button
							onClick={() => categoryFetch.categoryProduct(item.id)}
							key={item.id}>
							<div> {item.categoryName}</div>
						</button>
					))}
				</div>
			)
		}
	}
)
