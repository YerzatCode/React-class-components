import { Component } from 'react'
import { Image } from 'react-bootstrap'
import productFetch from '../fetch/product.fetch'

export default class Create extends Component {
	studentId = window.location.href.split('/')[4]
	state = {
		name: '',
		description: '',
		imageUrl: '',
		sku: '',
		unitPrice: 0,
		active: false,
		unitsInStock: 0,
		category: {
			id: 1,
		},
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
								<label htmlFor='#'>Цена</label>
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
							<div className='form-group'>
								<label htmlFor='exampleFormControlSelect1'>
									Example select
								</label>
								<select
									className='form-control'
									id='exampleFormControlSelect1'
									value={this.state.category.id}
									onChange={(e) =>
										this.setState({
											category: {
												id: e.target.value,
											},
										})
									}>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									value={this.state.active}
									onChange={() => this.setState({ active: !this.state.active })}
									id='defaultCheck1'
								/>
								<label className='form-check-label'>Активация</label>
							</div>
							<button
								className='my-5'
								onClick={() => productFetch.createProduct(this.state)}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
