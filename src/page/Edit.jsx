import axios from 'axios'
import { Component } from 'react'
import { Image } from 'react-bootstrap'
import productFetch from '../fetch/product.fetch'

export default class Edit extends Component {
	Id = window.location.href.split('/')[4]
	state = {
		name: '',
		description: '',
		imageUrl: '',
		sku: '',
		unitPrice: 0,
		active: false,
		unitsInStock: 0,
	}
	componentDidMount() {
		axios.get(`http://localhost:8080/api/products/${this.Id}`).then((res) => {
			const data = res.data
			this.setState({
				name: data.name,
				description: data.description,
				imageUrl: data.imageUrl,
				sku: data.sku,
				unitPrice: data.unitPrice,
				active: data.active,
				unitsInStock: data.unitsInStock,
			})
		})
	}

	render() {
		return (
			<div className='container '>
				<div className='row'>
					<div className='col'>
						<Image
							src={this.state.imageUrl}
							style={{ width: '100%', objectFit: 'cover' }}
						/>
					</div>
					<div className='col'>
						<div className='edit_panel'>
							<div className='form-group'>
								<label htmlFor='#'>Название</label>
								<input
									className='form-control'
									type='text'
									value={this.state.name}
									onChange={(e) =>
										this.setState({
											name: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='#'>Картина</label>
								<input
									className='form-control'
									type='text'
									value={this.state.imageUrl}
									onChange={(e) =>
										this.setState({
											imageUrl: e.target.value,
										})
									}
								/>
							</div>

							<div className='mb-3'>
								<label htmlFor='validationTextarea'>Описание</label>
								<textarea
									className='form-control '
									id='validationTextarea'
									placeholder='Напиши описание товара'
									value={this.state.description}
									onChange={(e) =>
										this.setState({
											description: e.target.value,
										})
									}
									required></textarea>
							</div>
							<div className='form-group'>
								<label htmlFor='#'>Sku</label>
								<input
									className='form-control'
									type='text'
									value={this.state.sku}
									onChange={(e) =>
										this.setState({
											sku: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='#'>Цена</label>
								<input
									className='form-control'
									type='number'
									value={this.state.unitPrice}
									onChange={(e) =>
										this.setState({
											unitPrice: e.target.value,
										})
									}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='#'>Количества</label>
								<input
									className='form-control'
									type='number'
									value={this.state.unitsInStock}
									onChange={(e) =>
										this.setState({
											unitsInStock: e.target.value,
										})
									}
								/>
							</div>

							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									value={true}
									id='defaultCheck1'
								/>
								<label className='form-check-label'>Активация</label>
							</div>
							<button
								className='my-5'
								onClick={() => productFetch.updateProduct(this.state, this.Id)}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
