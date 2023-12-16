import { observer } from 'mobx-react'
import { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ReactModal from 'react-modal'
import categoryFetch from '../../fetch/category.fetch'
import modal from '../../store/modal'

const customStyles = {
	content: {
		margin: 0,
		padding: 0,
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
}
// eslint-disable-next-line react-refresh/only-export-components
export default observer(
	class CreateCategory extends Component {
		state = {
			categoryName: '',
		}

		render() {
			return (
				<ReactModal isOpen={modal.isOpen} style={customStyles}>
					<div
						className='modal show'
						style={{ display: 'block', position: 'initial' }}>
						<Modal.Dialog>
							<Modal.Header closeButton onClick={() => modal.openModal()}>
								<Modal.Title>Создание категорий</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<div className='form-group'>
									<label htmlFor='#'>Название категорий</label>
									<input
										value={this.state.categoryName}
										onChange={(e) =>
											this.setState({ categoryName: e.target.value })
										}
										className='form-control'
										type='text'
									/>
								</div>
							</Modal.Body>

							<Modal.Footer>
								<Button variant='secondary' onClick={() => modal.openModal()}>
									Закрыт
								</Button>
								<Button
									variant='primary'
									onClick={() => categoryFetch.createCategory(this.state)}>
									Создать
								</Button>
							</Modal.Footer>
						</Modal.Dialog>
					</div>
				</ReactModal>
			)
		}
	}
)
