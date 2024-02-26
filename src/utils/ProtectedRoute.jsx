import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

	return (
		props.isAuth ? < Component {...props} /> : < Navigate to="/signup" replace />
	)
}

export default ProtectedRoute;