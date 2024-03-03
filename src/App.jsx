import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute'
import FormPage from './pages/FormPage/FormPage'
import OurTeamPage from './pages/OurTeamPage/OurTeamPage'
import NotFound from './pages/NotFound/NotFound';
import { setAuthTrue, setAuthFalse } from './store/auth/authSlice';
import { authSelectors } from './store/auth/authSelectors'

import './assets/styles/GlobalStyle.scss'
import './App.scss'

function App() {
	const isAuth = useSelector(authSelectors.getIsAuth)
	const [width, setWidth] = useState(window.innerWidth)
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
			dispatch(setAuthTrue())
		}
		else {
			dispatch(setAuthFalse())
		}
	}, []);

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
				<Route exact path='/signup' element={<FormPage />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
