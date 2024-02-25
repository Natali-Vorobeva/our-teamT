// import { Component } from 'react';
import { Navigate } from "react-router-dom";
// import { authSelectors } from '../store/auth/authSelectors'
// import { useSelector, useDispatch } from 'react-redux';

// const isAuth = useSelector(authSelectors.getIsAuth)
// console.log('%cisAuth-protected', 'color: red', isAuth)

const ProtectedRoute = ({ component: Component, ...props }) => {

	return (
		props.isAuth ? < Component {...props} /> : < Navigate to="/signup" replace />
	)
}

export default ProtectedRoute;