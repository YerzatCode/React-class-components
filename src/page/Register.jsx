import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBInput,
	MDBRow,
} from 'mdb-react-ui-kit'
import { Component } from 'react'
import userFetch from '../fetch/user.fetch'

export default class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
	}

	render() {
		return (
			<MDBContainer fluid>
				<MDBRow className='d-flex justify-content-center align-items-center h-100'>
					<MDBCol col='12'>
						<MDBCard
							className='bg-white my-5 mx-auto'
							style={{ borderRadius: '1rem', maxWidth: '500px' }}>
							<MDBCardBody className='p-5 w-100 d-flex flex-column'>
								<h2 className='fw-bold mb-2 text-center'>Sign up</h2>
								<p className='text-black text-center mb-3'>
									Please enter your login, password and username!
								</p>

								<MDBInput
									wrapperClass='mb-4 w-100'
									label='Username'
									id='formControlLg'
									type='text'
									size='lg'
									value={this.state.username}
									onChange={(e) => this.setState({ username: e.target.value })}
								/>
								<MDBInput
									wrapperClass='mb-4 w-100'
									label='Email address'
									id='formControlLg'
									type='email'
									size='lg'
									value={this.state.email}
									onChange={(e) => this.setState({ email: e.target.value })}
								/>
								<MDBInput
									wrapperClass='mb-3 w-100'
									label='Password'
									id='formControlLg'
									type='password'
									size='lg'
									value={this.state.password}
									onChange={(e) => this.setState({ password: e.target.value })}
								/>

								<MDBBtn
									size='lg'
									onClick={() => userFetch.Register(this.state)}>
									Регистрация
								</MDBBtn>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		)
	}
}
