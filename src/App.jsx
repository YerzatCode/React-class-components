import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/header'
import userFetch from './fetch/user.fetch'
import RedirectAuth from './hoc/RedirectAuth'
import RedirectAdmin from './hoc/ReditectAdmin'
import Create from './page/Create'
import Edit from './page/Edit'
import Home from './page/Home'
import Login from './page/Login'
import Product from './page/Product'
import Profile from './page/Profile'
import Register from './page/Register'

import 'react-toastify/dist/ReactToastify.css'
class App extends React.Component {
	componentDidMount() {
		userFetch.AuthVerif()
	}
	render() {
		return (
			<div className='container'>
				<Header />
				<ToastContainer
					position='top-right'
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				<Routes>
					<Route path='/product/:id' Component={Product} />
					<Route path='/' Component={Home} />
					<Route path='/login' Component={Login} />
					<Route path='/register' Component={Register} />
					<Route
						path='/no'
						element={
							<RedirectAuth>
								<Home />
							</RedirectAuth>
						}
					/>
					<Route
						path='/no/product'
						element={
							<RedirectAuth>
								<Product />
							</RedirectAuth>
						}
					/>
					<Route
						path='/me'
						element={
							<RedirectAuth>
								<Profile />
							</RedirectAuth>
						}
					/>
					<Route
						path='/edit/:id'
						element={
							<RedirectAdmin>
								<Edit />
							</RedirectAdmin>
						}
					/>
					<Route
						path='/create'
						element={
							<RedirectAdmin>
								<Create />
							</RedirectAdmin>
						}
					/>
				</Routes>
			</div>
		)
	}
}

export default App
