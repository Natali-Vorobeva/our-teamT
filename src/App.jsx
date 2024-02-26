import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute'
import FormPage from './pages/FormPage/FormPage'
import OurTeamPage from './pages/OurTeamPage/OurTeamPage'
import NotFound from './pages/NotFound/NotFound';
import { setAuth, setUsers } from './store/auth/authSlice';
import { authSelectors } from './store/auth/authSelectors'
import staff from './constants/constants'

import './assets/styles/GlobalStyle.scss'
import './App.scss'

function App() {
	const isAuth = useSelector(authSelectors.getIsAuth)
	const [width, setWidth] = useState(window.innerWidth);
	const dispatch = useDispatch()

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth)
		};
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		};
	}, [width])

	useEffect(() => {
		let dataLocal = localStorage.getItem('our-team');
		if (dataLocal !== null || '') {
			dispatch(setAuth(true))
		} else {
			dispatch(setAuth(false))
		}
	}, []);

	useEffect(() => {
		dispatch(setUsers(staff))
	}, [])

	return (
		<div className="app">
			<Routes>
				<Route path='/'
					element={
						<ProtectedRoute
							component={OurTeamPage}
							isAuth={isAuth}
							width={width}
						/>
					}
				/>
				<Route exact isAuth={isAuth} path='/signup' element={<FormPage />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
